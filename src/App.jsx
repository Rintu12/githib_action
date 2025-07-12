import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import LayoutCom from './component/Layout'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
      <LayoutCom>
        <Outlet />
      </LayoutCom>
    </>
  )
}

export default App
