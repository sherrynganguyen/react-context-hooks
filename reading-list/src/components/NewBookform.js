import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form className="newbookform" onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <button>Add New Book</button>
    </form>
  )
};

export default NewBookForm;