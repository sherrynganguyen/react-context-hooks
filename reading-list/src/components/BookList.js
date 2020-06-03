import React, {useContext} from 'react';

import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const {books} = useContext(BookContext);
  return books.length ? (
    <div className="booklist">
      <ul>
        {books.map((book) => {
          return ( <BookDetails key={book.id} book={book}/>);
        })}
      </ul>
    </div>
  )
  : (
    <div className="empty">No books to read</div>
  )
};

export default BookList;
