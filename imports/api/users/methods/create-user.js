import SimpleSchema from 'simpl-schema';

import _createUser from '../server/functions/create-user';

export const createUserSchema = new SimpleSchema({
  email: { type: String },
  password: { type: String },
  role: { type: String, allowedValues: ['admin', 'employee'] },
  firstName: { type: String },
  lastName: { type: String },
});

export const createUser = new ValidatedMethod({
  name: 'users.create',
  validate: createUserSchema.validator(),
  run({ email, password, role, firstName, lastName }) {
    if (!Roles.userIsInRole(this.userId, 'admin', 'global')) {
      throw new Meteor.Error('Access denied');
    }

    return _createUser({ email, password, role, firstName, lastName });
  },
});
