import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useGame from './store'
import GameManager from './manager'




function App() {
  return (
    <>
      <div>
          <button onClick={GameManager.clickEvent}>스테이트 바꾸기</button>
          <button onClick={GameManager.setArray}>배열 넣기</button>
      </div>
    </>
  )
}

export default App
