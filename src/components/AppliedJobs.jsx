import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsItem from './AppliedJobsItem';

const AppliedJobs = () => {
    const {appliedJobsArray} = useLoaderData(); 
    console.log({appliedJobsArray});
    return (
        <div>
            <h2 className='text-3xl font-bold mt-15'>Applied Jobs</h2>
            <div className='mt-15'>
                <div>
                    {
                        appliedJobsArray.map(appliedJob => <AppliedJobsItem
                        key={appliedJob.id}
                        appliedJob = {appliedJob}
                        ></AppliedJobsItem>)
                    }
                </div>
            </div>
         

        </div>
    );
};

export default AppliedJobs;