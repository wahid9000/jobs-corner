import React from 'react';
import './App.css'
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import JobCategory from './components/JobCategory';
import { useLoaderData } from 'react-router-dom';

const App = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className='px-2 lg:px-48'>
      <Header></Header>
      <HeaderBanner></HeaderBanner>
      <JobCategory categories={categories}></JobCategory>
    </div>
  );
};

export default App;
