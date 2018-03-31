export default (updateUser = ({
  userId,
  firstName,
  lastName,
  birthday,
  phone,
  address,
  emergencyContact,
  health,
  foodPreferences,
}) => {
  const query = {
    $set: {
      profile: {
        firstName: firstName ? firstName : '',
        lastName: lastName ? lastName : '',
        birthday: birthday ? birthday : '',
      },
      phone: phone ? phone : '',
      address: address ? address : '',
      emergencyContact: emergencyContact ? emergencyContact : '',
      foodPreferences: foodPreferences ? foodPreferences : '',
    },
  };

  console.log(query);

  return Meteor.users.update({ _id: userId }, query);
});
