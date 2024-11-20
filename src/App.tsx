import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useGame from './store'
import GameManager from './manager'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <button onClick={GameManager.clickEvent}/>
      </div>
    </>
  )
}

export default App
