import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import JobDetail from './JobDetail';
import { addToDb } from '../utils/fakedb';
import { toast } from 'react-hot-toast';
import useScrollTop from '../hooks/useScrollTop';

const JobDetails = () => {
    
    const { pathName } = useLocation();
    useScrollTop(pathName);
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