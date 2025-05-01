import './components/Welcome.jsx'
import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body class="bg-gradient-to-b from-emerald-950 bg-zinc-900 ">
        <Content />
      </body>

      <p> hello </p>
    </>
  )
}

/*
 * General container that holds all grid boxes
 * */
function Content() {
  return (
    <main>

    </main>
  )
}

export default App
