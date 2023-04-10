import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBanner = () => {
    return (
        <div className='mt-10 md:flex justify-center items-center gap-8'>
            <div className='text-start pl-6'>
                <h1 className='pr-32 font-bold'>One Step Closer To Your <span className='text-orange-400'>Dream Job</span> </h1>
                <p className='my-6 text-gray-500'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <Link><button className='btn btn-primary bg-blue-600 text-white'>Get Started</button></Link> 
            </div>
            <div>
                <img src="person.png" alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;