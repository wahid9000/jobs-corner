import React from 'react';
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AppliedJobsItem = ({appliedJob}) => {
    const {company_logo, job_title, company_name, type, timing, location, salary} = appliedJob;
    return (
        <div className='mt-15 flex gap-10 justify-center items-center'>
            <div>
                <img src={appliedJob.company_logo} alt="" />
            </div>
            <div>
                <h2 className='font-bold'>{job_title}</h2>
                <p className='text-gray-400'><small>{company_name}</small></p>
                <div className='flex gap-3 my-3'>
                    <p className='border py-1 px-2 text-blue-600 rounded-md border-gray-400'>{type}</p>
                    <p className='border py-1 px-2 text-blue-600 rounded-md border-gray-400'>{timing}</p>
                </div>
                <div className='flex gap-6 my-3'>
                    <p><FontAwesomeIcon className='' icon={faLocationDot}></FontAwesomeIcon> {location}</p>  
                    <p><FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> Salary : {salary}</p>
                </div>
            </div>
            <div>
               <Link><button className='btn-md bg-blue-600 text-white
                '>View Details</button></Link> 
            </div>
        </div>
    );
};

export default AppliedJobsItem;