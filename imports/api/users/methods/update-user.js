import SimpleSchema from 'simpl-schema';

import _updateUser from '../server/functions/update-user';

export const updateUserSchema = new SimpleSchema({
  userId: { type: String },
  firstName: { type: String, optional: true },
  lastName: { type: String, optional: true },
  birthday: { type: Date, optional: true },
  phone: { type: String, optional: true },
  address: { type: Object, optional: true, blackbox: true },
  emergencyContact: { type: Object, optional: true },
  'emergencyContact.name': { type: String },
  'emergencyContact.phone': { type: String },
  foodPreferences: { type: String, optional: true },
});

export const updateUser = new ValidatedMethod({
  name: 'users.update',
  validate: updateUserSchema.validator(),
  run({
    userId,
    firstName,
    lastName,
    birthday,
    phone,
    address,
    emergencyContact,
    health,
    foodPreferences,
  }) {
    if (
      userId !== this.userId ||
      !Roles.userIsInRole(this.userId, 'admin', 'global')
    ) {
      throw new Meteor.Error('Access denied');
    }

    return _updateUser({
      userId,
      firstName,
      lastName,
      birthday,
      phone,
      address,
      emergencyContact,
      health,
      foodPreferences,
    });
  },
});
