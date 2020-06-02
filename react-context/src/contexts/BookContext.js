import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Sapiens', id: 1 },
    { title: 'Start-Up Nation', id: 2 },
    { title: 'Winter Sonata', id: 3 }
  ])
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;