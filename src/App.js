import './App.css';
import Board from './components/Board.jsx'
import Navigation from './components/Navigation.jsx'
import React, { useState, useEffect } from 'react';

export default function App() {
  return (
    <div className="App">

    {/* routes de navigation de l'app */}
    
    <Navigation/>
    <Board/>

    </div>
  );
}