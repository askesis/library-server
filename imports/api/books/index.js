import SimpleSchema from 'simpl-schema';

const Books = new Mongo.Collection('books');

Books.schema = new SimpleSchema({
  name: { type: String },
  author: { type: String, optional: true },
  range: { type: String, optional: true },
  description: { type: String, optional: true }
});

Books.attachSchema(Books.schema);

export default Books;