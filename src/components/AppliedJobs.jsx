import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsItem from './AppliedJobsItem';

const AppliedJobs = () => {
    const {appliedJobsArray} = useLoaderData(); 

    return (
        <div>
            <div className='pt-12 pb-12 bg-gray-100'>
                <h2 className='text-3xl font-bold'>Applied Jobs</h2>
            </div>
            
            <div>
                <div className='pt-3'>
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