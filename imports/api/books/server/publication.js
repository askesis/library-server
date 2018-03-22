import Books from '../index';

Meteor.publish('books.public', function() {
  return Books.find({
    _id: {$exists: false}
  }, {
    fields: Books.publicFields
  });
});