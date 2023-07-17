import React, { useEffect, useState } from 'react';
import SingleFeaturedJob from './SingleFeaturedJob';

const FeaturedJobs = ({ featuredJobs }) => {

    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false)

    useEffect(() => {
        const initialJobs = featuredJobs.slice(0, 4);
        setJobs(initialJobs);
    }, [])

    const handleShowLessBtn = () => {
        const initialJobs = featuredJobs.slice(0, 4);
        setJobs(initialJobs);
        setShowAllJobs(false)
    }

    const handleShowAllBtn = () => {
        const allJobs = featuredJobs;
        setJobs(allJobs)
        setShowAllJobs(true);
    }

    return (
        <div id='apply' className='mt-24'>
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

            {
                showAllJobs ? (
                    <button onClick={handleShowLessBtn} className='btn-md bg-blue-600 hover:bg-orange-400 text-white
            mt-10'>Show Less Jobs</button>
                ) : (
                    <button onClick={handleShowAllBtn} className='btn-md bg-blue-600 hover:bg-orange-400 text-white
            mt-10'>Show All Jobs</button>
                )
            }
            <div>

            </div>


        </div>
    );
};

export default FeaturedJobs;