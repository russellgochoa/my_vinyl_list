// App.js

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Listings from './components/Listings'
import RecordDetails from './components/RecordDetails'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header>
        <main>
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path=":id" element={<RecordDetails />} />
          </Routes>
        </main>
      </header>
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
