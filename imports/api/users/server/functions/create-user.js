export default (createUser = ({
  email,
  password,
  role,
  firstName,
  lastName,
}) => {
  const user = {
    email,
    password,
    profile: {
      firstName,
      lastName,
    },
  };

  const userId = Accounts.createUser(user);
  Roles.addUsersToRoles(userId, role, 'global');

  return userId;
});
