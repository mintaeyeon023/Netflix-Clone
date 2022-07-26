import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>NETFLIX-CLONE</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchActionMovies} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
