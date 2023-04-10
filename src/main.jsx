import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import Stat from './components/Stat';
import Blogs from './components/Blogs';
import JobDetails from './components/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/singlefeaturedJob/:singlefeaturedJobId',
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`/jobs.json/${params.singlefeaturedJobId}`)
        // loader: ({params}) => console.log(params.singlefeaturedJobId)
         loader: () => fetch('/jobs.json')
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'stat',
        element: <Stat></Stat>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
