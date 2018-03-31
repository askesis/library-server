publishComposite('users.me', function() {
  return {
    find() {
      return Meteor.users.find(
        { _id: this.userId },
        {
          fields: {
            profile: 1,
            phone: 1,
          },
        }
      );
    },
  };
});
