import React from 'react';
import './App.css'
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className='lg:px-48'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
      <Toaster></Toaster>
    </div>
  );
};

export default App;
