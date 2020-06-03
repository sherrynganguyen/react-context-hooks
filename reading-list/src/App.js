import React from 'react';
import BookContextProvider from '../src/contexts/BookContext';

import NavBar from './components/NavBar';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookform';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
