import React, {useContext} from 'react';

import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const {books} = useContext(BookContext);
  return books.length ? (
    <div className="booklist">
      <ul>{books.map((book) => <li key= {book.id}>{book.title}</li>)}</ul>
    </div>
  )
  : (
    <div className="empty">No books to read</div>
  )
};

export default BookList;
