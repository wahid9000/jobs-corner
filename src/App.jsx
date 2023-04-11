import React from 'react';
import './App.css'
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='lg:px-48'>
      <Header></Header>
      <Outlet></Outlet>


      <Toaster></Toaster>
    </div>
  );
};

export default App;
