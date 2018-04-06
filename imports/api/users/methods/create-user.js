import SimpleSchema from 'simpl-schema';

import _createUser from '../server/functions/create-user';

export const createUserSchema = new SimpleSchema({
  email: { type: String },
  password: { type: String },
  role: { type: String, allowedValues: ['admin', 'employee'] , optional: true},
  firstName: { type: String, optional: true },
  lastName: { type: String, optional: true },
});

export const createUser = new ValidatedMethod({
  name: 'users.create',
  validate: createUserSchema.validator(),
  run({ email, password, role, firstName, lastName }) {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('Access denied');
    }

    return _createUser({ email, password, role, firstName, lastName });
  },
});
