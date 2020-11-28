import React, { useState } from 'react';
import '../styles/Home.css';
import { songs } from '../songs';
import SongTile from './SongTile';

function Home() {
  return (
    <div className='home'>
      <h1>HDTN - An album by Yours For Mine</h1>
      <div>
        <SongTile />
      </div>
    </div>
  );
}

export default Home;
