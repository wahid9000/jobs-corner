import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import JobDetail from './JobDetail';

const JobDetails = () => {
    const params = useParams();
    const jobDetails = useLoaderData();
    
    const [jobData, setJobData] = useState({});
    useEffect(()=> {
        const jobs = jobDetails.find(job=> job.id === params.singlefeaturedJobId);
        setJobData(jobs);
    }, [])

    return (
        <div>
            <JobDetail jobData={jobData}></JobDetail>
        </div>
    );
};

export default JobDetails;