import React, {useContext} from 'react';

import { BookContext } from '../contexts/BookContext';

const BookList = ({ book}) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
};

export default BookList;
