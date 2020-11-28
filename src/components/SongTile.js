import React, { useState } from 'react';
import '../styles/SongTile.css';
import { songs } from '../songs';

function SongTile() {
  const [songData, setSongData] = useState(songs);

  return (
    <div className='songTile'>
      <div>
        {songs.map(song => {
          return song.lyrics;
        })}
      </div>
    </div>
  );
}

export default SongTile;
