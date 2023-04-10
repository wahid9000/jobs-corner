import React from 'react';
import './App.css'
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import JobCategory from './components/JobCategory';
import { Outlet, useLoaderData } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className='lg:px-48'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
