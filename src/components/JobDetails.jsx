import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import JobDetail from './JobDetail';
import { addToDb } from '../utils/fakedb';
import { toast } from 'react-hot-toast';

const JobDetails = () => {
    const params = useParams();
    const jobDetails = useLoaderData();
    
    const [jobData, setJobData] = useState({});
    useEffect(()=> {
        const jobs = jobDetails.find(job=> job.id === params.singlefeaturedJobId);
        setJobData(jobs);
    }, [])

    const handleAppliedJobsBtn = (id) => {
        addToDb(id);
        toast('You have successfully applied to the Job.')
    }
    
    return (
        <div>
            <JobDetail 
            jobData={jobData}
            handleAppliedJobsBtn={handleAppliedJobsBtn}
            ></JobDetail>
        </div>
    );
};

export default JobDetails;