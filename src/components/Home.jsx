import React from 'react';
import HeaderBanner from './HeaderBanner';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featuredJobs = useLoaderData();
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='lg:px-48'>
                <JobCategory></JobCategory>
                <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
            </div>

        </div>
    );
};

export default Home;