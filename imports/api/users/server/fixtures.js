const users = [
  {
    email: 'admin@example.com',
    password: 'admin@example.com',
    position: 'Chef',
    roles: ['admin', 'employee'],
    profile: { firstName: 'Админ', lastName: 'Админ ' },
  },
  {
    email: 'user@example.com',
    password: 'user@example.com',
    position: 'some',
    roles: ['employee'],
    profile: { firstName: 'Пользователь', lastName: 'Пользователь ' },
  }
];

if (Meteor.users.find().count() !== users.length) {
  users.map(({ email, password, position, roles, profile }) => {
    if (Accounts.findUserByEmail(email)) return;
    const _id = Accounts.createUser({ email, password, profile });

    const updateQuery = {};
    const employeePosition = EmployeePositions.findOne({ title: position });
    if (employeePosition) updateQuery.positionId = employeePosition._id;

    Employees.upsert(
      { userId: _id },
      {
        $set: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          positionId: employeePosition._id,
          salary: 10000,
          hiredAt: new Date(),
        },
      }
    );
    const employee = Employees.findOne({ userId: _id });
    updateQuery.employeeId = employee._id;

    Meteor.users.update({ _id }, { $set: { ...updateQuery } });

    Roles.addUsersToRoles(_id, roles, 'global');
  });
}
