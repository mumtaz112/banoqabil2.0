import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tableform from './Components/Tableform'
import Propsvalue from './Components/Propsvalue'
import Apibind from './Components/apibind'
import { Container,Row,Col } from 'react-bootstrap'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tableform />
    <Propsvalue image="https://cdn.wallpapersafari.com/15/66/zTYjnR.jpg" title="Natural" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
    <Apibind/> 
    </>
  )
}

export default App
