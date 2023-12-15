import { useState, useRef } from 'react'
import './App.css'


function App() {
  let [tasks, setTasks] = useState([])
  let [taskStatus, setTaskStatus] = useState([])
  const inputRef = useRef();
  const dateRef = useRef();

  const handleAddTask = () => {
    const taskName = inputRef.current.value
    const taskDate = dateRef.current.value

    if (taskName !== '' && taskDate !== '') {
      setTasks((prevTasks) => [...prevTasks, { name: taskName, date: taskDate }])
      inputRef.current.value = ''
      dateRef.current.value = ''
    }
    else {
      alert('Add a task/due-date to your todo.')
    }
  }

  const handleTaskStatus = (currentTask) => {
    if (confirm('Mark as Complete?') == true) {
      setTasks((prevTasks) => prevTasks.filter(task => { task != currentTask }))
      setTaskStatus((prevTasks) => [...prevTasks, currentTask])
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }


  return (
    <>
      <div className='main grid grid-cols-2 gap-10' >
        <div>
          <h2 className='text-xl text-left'>Add <span className='text-pink-300'>Tasks</span> to your <span className='text-pink-300'>Todo</span></h2>
          <div className='w-full bg-gray-700 text-center py-3 px-2 my-2 shadow-md'>
            <div className='flex'>
              <input type="text" className='add-task w-full rounded-l-md p-2 text-black focus:outline-none' placeholder='Add Task' ref={inputRef} onKeyDown={() => handleKeyPress(event)} />
              <input type="date" name="deadline" className='text-black focus:outline-none w-full' ref={dateRef} onKeyDown={() => handleKeyPress(event)} />
              <button className='rounded-none rounded-r-md bg-blue-500 border-none text-white focus:outline-none hover:bg-green-600' onClick={handleAddTask}>Add</button>
            </div>
            <div className='added-task mt-3 rounded-1-lg'>
              <ul>
                {tasks.map((task, index) => (
                  <li key={index} className='grid grid-cols-3 m-2 items-center'>
                    <span className='text-left mx-2'>{task.name}</span>
                    <span>{task.date}</span>
                    <button className='rounded-none rounded-md bg-green-500 border-none text-white p-2 m-1 ' onClick={() => handleTaskStatus(task)}>Complete</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='completed-task'>
          <h2 className='text-xl my-1'>Completed <span className='text-pink-300'>Tasks</span></h2>
          <div className='task-done '>
            <ul>
              {taskStatus.map((task, index) => 
                <li key={index} className='text-white  grid bg-gray-700 grid-cols-2'>
                 <span className='text-left mx-2'>{task.name}</span>
                 <span className=''>{task.date}</span> 
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
