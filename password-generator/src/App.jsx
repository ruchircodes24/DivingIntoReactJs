import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [alphaNum, setAlphaNum] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [btnColor, setBtnColor] = useState('blue')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {//useCallback is used to memoize a callback function, especially in the context of preventing unnecessary re-renders in child components.
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (alphaNum) str += '012345678'
    if (charAllowed) str += '!@#$%^&*()-_+=<>?/[]{}|;:'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, alphaNum, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password
      )

    setBtnColor('green');
    setTimeout(() => {
      setBtnColor('blue')
    }, 1000)
  
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, alphaNum, charAllowed, passwordGenerator])//use effect is responsible for running the passwordGenerator if there's any change in above mentioned dependencies

  return (
    <>
      <h1 className='text-5xl my-5 text-white'>Diving into React | Day 3</h1>
      <div className='w-full max-w-md text-center mx-auto shadow-lg rounded-lg px-4 bg-gray-800 py-2 my-2'>
        <h3 className='text-3xl text-center text-white my-1'>Password Generator</h3>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg   my-4 text-orange-500 mb-4 flex'>
          <input type="text" value={password} className='outline-none w-full py-3 px-3 rounded-l-md' readOnly placeholder='Password' ref={passwordRef} />
          <button className={`copy-btn bg-${btnColor}-700 text-white py-2 px-5 rounded-none rounded-r-md shrink-0`} onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          </div>
          <label className='text-white' >Length: {length}</label>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={alphaNum} id='numberInput' onChange={() => { setAlphaNum((prev) => !prev) }} />
            <label htmlFor='numberInput' className='text-white' >Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={setCharAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev )}} />
            <label htmlFor="charInput" className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
