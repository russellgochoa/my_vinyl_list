// App.js

import React, { useState } from 'react'
import boatsArray from './data/boats'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Listings from './components/Listings'

const App = () => {
  return (
    <div>
      <Listings />
    </div>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App
