import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div>
            <div className='mt-[10%]'>
                <h2 className='text-8xl font-bold'>404<span className='font-normal text-4xl ml-2 text-orange-400'><small>error</small></span></h2>
                <p className='text-3xl mt-5'>{error.message}</p>
            </div>
            <Link to="/"><button className='btn-md bg-orange-400 text-white mt-10 hover:bg-orange-500'>Back To Home Page</button></Link> 
            
        </div>
    );
};

export default ErrorPage;