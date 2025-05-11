import Welcome from './components/Welcome.jsx'
import AboutMe from './components/Aboutme.jsx'
import ContactMe from './components/Contact.jsx'
import ThemeChanger from './components/Themechanger.jsx'
import ProjectViewer from './components/Projectviewer.jsx'
import Credits from './components/Credits.jsx'
import LocalTime from './components/LocalTime.jsx'
import TechScrollable from './components/Techscrollable.jsx'

import { projectData } from './components/Data'

function App() {
  // Top level div just defines a fixed background that matches the entire viewport 
  // screen no matter the size
  return (
    <>
      <div className="fixed inset-0 -z-50 flex bg-[#001211]"> </div>
      <div className="fixed inset-0 -z-40 flex bg-[radial-gradient(#6b6b6b.5px,transparent_1.5px)] [background-size:40px_40px]"> </div>
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
      <div className='card'> rip resumeviewer u were a real one</div>
      <div className="card md:row-span-3"> Placeholder </div>
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
