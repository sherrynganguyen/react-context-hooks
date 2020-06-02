import React, { useState, useEffect } from 'react';

import { v1 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songList, setSongList] = useState([
    { title: 'almost home', id: 1 },
    { title: 'i love you', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  const addSong = (title) => {
    setSongList([...songList, { title, id: uuid()}])
  };

  return (
    <div className="songlist">
      <ul>{songList.map((song) => {
        return <li key={song.id}>{song.title}</li>
      })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  );
}

export default SongList;