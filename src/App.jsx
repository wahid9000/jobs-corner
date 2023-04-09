import React from 'react';
import './App.css'
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';

const App = () => {
  return (
    <div className='px-2 lg:px-48'>
      <Header></Header>
      <HeaderBanner></HeaderBanner>
    </div>
  );
};

export default App;
