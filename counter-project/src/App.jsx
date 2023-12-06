import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  //let counter = 5; this variable cannot be updated in UI 
  const addValue = () => {
    if(counter<20)
      setCounter(counter + 1)
    else
      setCounter(counter - counter)
  }

  const removeValue = () => {
    if(counter>0)
      setCounter(counter - 1)
    else
      setCounter(counter-counter)
  }

  return (
    <>
      <h1>Diving Into React  | Day 2</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
