import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from'react';
import { Card } from './card/card';


function App(){

  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetch('http://cabe0232.odns.fr/webdev-api/games/reviews')
    .then(response => response.json())
    .then(json => setGameList(json));
}, []);

//const [gamecart, setGameCart] = useState({selectedFoods: [], selectedMenus: []});




      return(
      <>
        <BrowserRouter>
        <h1>
          Video Games Reviews
        </h1>
        <p>Web development training project, built with React</p>
        <Routes>
        <ul>
        {gameList.map(game => (
        <li key={game.id}>{game.userName}+" "+{game.commit}+" "+{game.note}+" "+{game.gameId}</li>
      ))}
        </ul>
        </Routes>
      </BrowserRouter>
      </>

   
    )
}

export default App;