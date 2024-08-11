import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RideOption from './components/RideOption';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RideOption service="Grab" type="standard" price={12.30} eta={5}/>
    </>
  )
}

export default App
