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

function App() {
  // Top level div just defines a fixed background that matches the entire viewport 
  // screen no matter the size
  return (
    <>
      <div className="fixed inset-0 -z-50 flex bg-color-primary"> </div>
      <div className="fixed inset-0 -z-40 flex bg-themed-dots "> </div>
      <Content />
    </>
  )
}

/*
 * Overarching site container styled as a grid container with 4 cols
 *
 * */

function Content() {
  return (
    <main className="grid overflow-hidden m-auto p-2 gap-4 top-0 md:grid-cols-4 md:grid-rows-8 md:max-h-[1000px] md:max-w-[1300px]">
      <Welcome />
      <AboutMe />
      <ContactMe />
      <LocalTime />
      <DodgersWin />
      <div className="card md:row-span-1 "> <h1 className='text-2xl text-center'> Work In Progress! </h1> </div>
      {
        projectData.map(project => (
          <ProjectViewer key={project.id} background={project.image} projectlink={project.githublink} />))
      }
      <TechScrollable />
      <ThemeChanger />
      <Credits />
    </main >
  )
}

export default App
