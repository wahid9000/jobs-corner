import React from 'react';
import './App.css'
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import JobCategory from './components/JobCategory';
import { useLoaderData } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className='px-2 lg:px-48'>
      <Header></Header>
      <Home></Home>
    </div>
  );
};

export default App;
