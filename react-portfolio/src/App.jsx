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
      {/* TODO: Add background custom color and dot color to overarching theme */}
      {/* <div className="fixed inset-0 -z-50 flex bg-gradient-to-b from-[#1E4941] from-0% to-gray-500 to-190%"> </div> */}
      <div className="fixed inset-0 -z-50 flex bg-[#001211]"> </div>
      {/* <div className="fixed inset-0 -z-40 flex bg-[radial-gradient(#111111_1.5px,transparent_1.5px)] [background-size:24px_24px]"> </div> */}
      <div className="fixed inset-0 -z-40 flex bg-[radial-gradient(#6b6b6b.5px,transparent_1.5px)] [background-size:40px_40px]"> </div>
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
    <main className="grid overflow-hidden m-auto p-2 gap-4 top-0 md:grid-cols-4 md:grid-rows-8 md:max-h-[1000px] md:max-w-[1300px]">
      <Welcome />
      <AboutMe />
      <ContactMe />
      <LocalTime />
      <ResumeViewer />
      <div className="card md:row-span-3"> Placeholder </div>
      <ProjectViewer background={projectlinks.portfoliowebsite[1]} projectlink={projectlinks.portfoliowebsite[0]} />
      <ProjectViewer background={projectlinks.stm32BLE[1]} projectlink={projectlinks.stm32BLE[0]} />
      <TechScrollable />
      <ThemeChanger />
      <ProjectViewer background={projectlinks.stm32BLE[1]} projectlink={projectlinks.stm32BLE[0]} />
      <Credits />
    </main >
  )
}

export default App
