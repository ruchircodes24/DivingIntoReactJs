import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from '/Layout.jsx'

import {Home, About, Contact, User, Github} from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'user/:userid',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github/>,
        loader: githubInfoLoader
      }

    ]
}])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' elements={<Layout />}>
//       <Route path= '/' elements={<Home/>}/>
//       <Route path= '/about' elements={<About/>}/>
//       <Route path= '/contact' elements={<Contact/>}/>
//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
