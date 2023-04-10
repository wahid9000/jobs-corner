import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

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
            <div> 
              <h2 className='text-3xl font-bold mt-16'>Job Details</h2>  
            </div>   

            <div className='mt-10 md:flex gap-16 p-8'>

                <div className='text-start md:w-[60%] mb-8'>
                    <p><span className='font-bold'>Job Description :</span> {jobData.job_description}</p>
                    <p className='my-5'><span className='font-bold'>Job Responsibility :</span> {jobData.job_responsibility}</p>
                    <p className='mb-2'><span className='font-bold mb-1 block'>Educational Requirements :</span>  {jobData.educational_requirement}</p>
                    <p><span className='font-bold block'>Experiences :</span>  {jobData.experience}</p>
                </div>

                <div>
                    <div className='text-start px-6 py-4 bg-gray-200 rounded-md'>
                        <h3 className='pb-1 font-bold'>Job Details</h3>
                           ----------------------------------------
                        <div className='pt-1'>
                            <p className='py-2'><span className='font-semibold'>Salary</span>  : {jobData.salary} (Per Month)</p>
                            <p><span className='font-semibold'>Job Title</span> : {jobData.job_title}</p> 
                        </div>
                        <h3 className='pt-5 font-bold'>Contact Information</h3>
                            ----------------------------------------
                        <div>
                            <p className='py-2'><span className='font-semibold'>Phone</span> : {jobData.company_phone}</p>
                            <p><span className='font-semibold'>Email</span> : {jobData.company_email}</p>
                            <p className='py-2'><span className='font-semibold'>Address</span> : {jobData.location}</p>
                        </div>   
                    </div>
                    <Link><button className='btn-md bg-blue-600 text-white w-[100%] mt-5'>Apply Now</button></Link> 
                </div>
                
                

            </div>    
        </div>
    );
};

export default JobDetails;