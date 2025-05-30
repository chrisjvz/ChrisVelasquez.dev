import Welcome from './components/Welcome.jsx'
import AboutMe from './components/Aboutme.jsx'
import ContactMe from './components/Contact.jsx'
import ThemeChanger from './components/Themechanger.jsx'
import ProjectViewer from './components/Projectviewer.jsx'
import Credits from './components/Credits.jsx'
import LocalTime from './components/LocalTime.jsx'
import TechScrollable from './components/Techscrollable.jsx'

import { projectData } from './components/Data'
import DodgersWin from './components/DodgersWin.jsx'

import { useEffect, useState } from "react";
function App() {
  /* Use local storage to persist chosen theme on reload or reopen*/
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", localStorage.getItem('data-theme') ?? 'base');
  }), [];
  // Top level div just defines a fixed background that matches the entire viewport 
  return (
    <>
      <div className="fixed inset-0 -z-50 flex bg-color-primary"> </div>
      <div className="fixed inset-0 -z-40 flex "> </div>
      <Content />
    </>
  )
}

/*
 * Overarching site container styled as a grid container with 4 cols
 * */

function Content() {
  const [theme, setTheme] = useState(() => localStorage.getItem("data-theme") ?? 'base');
  return (
    <main className="grid overflow-hidden m-auto p-2 gap-4 top-0 md:grid-cols-4 md:grid-rows-24 lg:grid-rows-12 md:max-h-[1000px] md:max-w-[1400px]">
      <Welcome />
      <AboutMe />
      <ContactMe />
      <LocalTime />
      {
        projectData.map(project => (
          <ProjectViewer key={project.id}
            background={project.image}
            projectlink={project.githublink}
            mobileDesc={project.mobileDesc}
            mobileTitle={project.mobileTitle}
          />))
      }

      {/* <div className="card md:row-span-1 "> <h1 className='text-2xl text-center'> Work In Progress! </h1> </div> */}
      {console.log("state theme", theme)}
      <DodgersWin theme={theme} />
      <TechScrollable />
      <ThemeChanger setThemeState={setTheme} />
      <Credits />
    </main >
  )
}



export default App
