import Welcome from './components/Welcome.jsx'
import AboutMe from './components/Aboutme.jsx'
import ContactMe from './components/Contact.jsx'
import ResumeViewer from './components/Resumeviewer.jsx'
import ThemeChanger from './components/Themechanger.jsx'
import ProjectViewer from './components/Projectviewer.jsx'
import Credits from './components/Credits.jsx'
import LocalTime from './components/LocalTime.jsx'
import TechScrollable from './components/Techscrollable.jsx'


import { useState } from 'react'

// HACK: Testing code

import mcu from "./assets/stm32.jpg"
import dsgas from "./assets/gasdatascience.jpg"

//TODO : FIX naming conventions here, possibly move to new file and fix assets
const projectlinks = {
  portfoliowebsite: ["https://github.com/AmnesiacSloth/ChrisVelasquez.dev", dsgas],
  httpserver: "https://github.com/AmnesiacSloth/httpserver",
  jccprocessor: "https://github.com/AmnesiacSloth/CPU-Design",
  bingobongo: "https://github.com/AmnesiacSloth/BingoBongo",
  dimes: "https://github.com/AmnesiacSloth/Dimes",
  stm32BLE: ["https://github.com/cse-190e-fall-2023/youlostit-project-1-blinkenlights-32-bit-monstas", mcu]
}
function App() {
  // Top level div just defines a fixed background that matches the entire viewport 
  // screen no matter the size
  return (
    <>
      <div className="fixed inset-0 -z-50 flex bg-emerald-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"> </div>
      <Content />
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
    <main className="grid overflow-hidden m-auto p-1 gap-1 lg:grid-rows-4 lg:grid-cols-8 ">
      <Welcome />
      <AboutMe />
      <ContactMe />
      <ResumeViewer />
      <ThemeChanger />
      <ProjectViewer background={projectlinks.portfoliowebsite[1]} projectlink={projectlinks.portfoliowebsite[0]} />
      <ProjectViewer background={projectlinks.stm32BLE[1]} projectlink={projectlinks.stm32BLE[0]} />
      <TechScrollable />
      <LocalTime />
      <Credits />
    </main >
  )
}

export default App
