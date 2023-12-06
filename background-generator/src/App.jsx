import { useState } from 'react'
import Colorpalette from './components/Colorpalette'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color, setColor] = useState('olive')
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <h1>Diving Into React | Project 1 </h1>
        <br />
        <Colorpalette color = 'red' btnText = 'Red' />
        <Colorpalette color = 'yellow' btnText = 'Yellow'/>
        <Colorpalette color = 'black' btnText = 'black'/>
        <Colorpalette color = 'green' btnText = 'Green'/>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center px-3 py-2 bg-white rounded-3xl gap-2 shadow-lg'>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'yellow'}} onClick={() => setColor('yellow')} >Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'green'}} onClick={() => setColor('green')}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'olive'}} onClick={() => setColor('olive')}>Olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'pink'}} onClick={() => setColor('pink')}>pink</button>
          </div>
        </div>
      </div>
      
    </> 
  )
}

export default App
