import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Listings from './components/Listings'
import RecordDetails from './components/RecordDetails'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="listings/:id" element={<RecordDetails />} />
          </Routes>
        </main>
      </header>
    </div>
  )
}

export default App
