import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from './SingleFeaturedJob';

const FeaturedJobs = ({featuredJobs}) => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const initialJobs = featuredJobs.slice(0, 4);
        setJobs(initialJobs);
    }, [])

    const handleShowAllBtn = () => {
        const allJobs = featuredJobs;
        setJobs(allJobs);
    }

    return (
        <div className='mt-24'>
            <h2 className='text-3xl font-bold'>Featured Jobs</h2>
            <p className='py-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='gap-8 mt-10 grid md:grid-cols-2 text-start'>
                {
                    jobs.map(singlefeaturedJob => <SingleFeaturedJob
                    key={singlefeaturedJob.id}
                    singlefeaturedJob={singlefeaturedJob}
                    ></SingleFeaturedJob>)
                }
            </div>
            <div>
                <button onClick={handleShowAllBtn} className='btn-md bg-blue-600 hover:bg-orange-400 text-white
            mt-10'>Show All Jobs</button>
            </div>

            
        </div>
    );
};

export default FeaturedJobs;