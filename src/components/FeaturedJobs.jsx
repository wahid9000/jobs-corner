import React from 'react';
import SingleFeaturedJob from './SingleFeaturedJob';

const FeaturedJobs = ({featuredJobs}) => {
    return (
        <div className='mt-24'>
            <h2 className='text-3xl font-bold'>Featured Jobs</h2>
            <p className='py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='gap-8 mt-10 grid md:grid-cols-2 text-start'>
                {
                    featuredJobs.map(singlefeaturedJob => <SingleFeaturedJob
                    key={singlefeaturedJob.id}
                    singlefeaturedJob={singlefeaturedJob}
                    ></SingleFeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;