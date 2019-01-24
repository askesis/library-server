import Books from '../';
import books from './templatebooks';

if (Books.find().count() !== books.length) {
  books.map(book =>
    Books.upsert(
      { 
        name: book.name,
        author: book.author,
        range: book.range,
        description: book.description,
      },
      { $set: { ...book } }
    )
  );
}
