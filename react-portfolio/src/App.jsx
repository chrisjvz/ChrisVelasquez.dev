import Welcome from './components/Welcome.jsx'
import { useState } from 'react'
import './App.css'


function App() {
  // Top level div just defines a immoveable background that matches the entire viewport 
  // screen no matter the size
  return (
    <>
      <div className="fixed inset-0 min-h-screen bg-gradient-to-b from-emerald-950 bg-zinc-900">
        <Content />
      </div>
    </>
  )
}

/*
 * Overarching site container styled as a grid container with 4 cols
 *
 * TODO: Add media query with tailwind?
 * */
function Content() {
  return (
    <div className="grid-cols-4">
      <Welcome />
    </div >
  )
}

export default App
