import Welcome from './components/Welcome.jsx'
import AboutMe from './components/Aboutme.jsx'
import ContactMe from './components/Contact.jsx'
import ResumeViewer from './components/Resumeviewer.jsx'
import ThemeChanger from './components/Themechanger.jsx'
import ProjectViewer from './components/Projectviewer.jsx'

import { useState } from 'react'
import './App.css'


function App() {
  // Top level div just defines a immoveable background that matches the entire viewport 
  // screen no matter the size
  return (
    <>
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-emerald-950 bg-zinc-900">
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
    <main className="grid grid-rows-4 grid-cols-4 max-w-screen h-dvh">
      <Welcome />
      <AboutMe />
      <ContactMe />
      <ResumeViewer />
      <ThemeChanger />
      <ProjectViewer />
      <ProjectViewer />
    </main >
  )
}

export default App
