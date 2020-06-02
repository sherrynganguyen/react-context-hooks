import React, { useState } from 'react';

import { v1 as uuid } from 'uuid';

const SongList = () => {
  const [songList, setSongList] = useState([
    { title: 'almost home', id: 1 },
    { title: 'i love you', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  const [input, setInput] = useState("");

  const addSong = (e) => {
    e.preventDefault();
    setSongList([...songList, { title: input, id: uuid()}])
  };
  
  const handleOnchange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="songlist">
      <ul>{songList.map((song) => {
        return <li key={song.id}>{song.title}</li>
      })}
      </ul>
      <form onSubmit={addSong}>
        <input type="text" value={input} onChange={handleOnchange}></input>
        <button>Add New Song</button>
      </form>
    </div>
  );
}

export default SongList;