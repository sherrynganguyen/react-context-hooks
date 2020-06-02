import React, { useState } from 'react';

import { v1 as uuid } from 'uuid';

const NewSongForm = ({ addSong }) => {
  const [input, setInput] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    addSong(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSumit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button>Add New Song</button>
    </form>
  );
}

export default NewSongForm;