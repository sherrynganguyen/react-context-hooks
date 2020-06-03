import React, {useContext} from 'react';

import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const {books} = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently have {books.length} books to read</p>
    </div>
  )
};

export default NavBar;
