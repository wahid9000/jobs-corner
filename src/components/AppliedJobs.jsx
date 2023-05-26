import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import AppliedJobsItem from './AppliedJobsItem';
import useScrollTop from '../hooks/useScrollTop';

const AppliedJobs = () => {
    const { pathName } = useLocation();
    useScrollTop(pathName);
    const {appliedJobsArray} = useLoaderData(); 

    const [appliedJobs, setAppliedJobs] = useState(appliedJobsArray);

    const handleRemoteBtn = () => {
        const remoteJobs = appliedJobs.filter(job => job.type === "Remote");
        setAppliedJobs(remoteJobs);
    }

    const handleOnsiteBtn = () => {
        const onsiteJobs = appliedJobs.filter(job=> job.type === "Onsite");
        setAppliedJobs(onsiteJobs);
    }



    return (
        <div>
            <div className='pt-12 pb-12 bg-gray-100'>
                <h2 className='text-3xl font-bold'>Applied Jobs</h2>
            </div>
            <div className='text-white'>
                <button onClick={handleRemoteBtn} className='bg-blue-600 mr-2'>Filter By Remote Jobs</button>
                <button onClick={handleOnsiteBtn} className='bg-blue-600 mr-2'>Filter By Onsite Jobs</button>
            </div>
            
           
            
            <div>
                <div className='pt-3'>
                    {
                        appliedJobs.map(appliedJob => <AppliedJobsItem
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