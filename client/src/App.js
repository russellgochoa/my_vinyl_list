import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Listings from './components/Listings'
import RecordDetails from './components/RecordDetails'
import ListDetails from './components/ListDetails'
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
            <Route path="/lists" element={<ListDetails />} />
          </Routes>
        </main>
      </header>
    </div>
  )
}

export default App
