import React from 'react';
import { faDollar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AppliedJobsItem = ({appliedJob}) => {
    const {company_logo, job_title, company_name, type, timing, location, salary, id} = appliedJob;
    return (
        <div className='shadow-md rounded-md border p-5'>
            <div className='md:flex justify-around gap-48 items-center'>
                <div className='md:flex gap-11 items-center'>
                    <div className='shadow p-5 py-8 m-2 bg-gray-100 mb-5'>
                    <img src={company_logo} alt="" /> 
                    </div>
                    <div className='text-start pl-2'>
                        <h2 className='font-bold'>{job_title}</h2>
                        <p className='text-gray-500 py-2'>{company_name}</p>
                        <div className='flex gap-3'>
                            <p className='border py-1 px-2 text-blue-600 rounded-md border-gray-400'>{type}</p>
                            <p className='border py-1 px-2 text-blue-600 rounded-md border-gray-400'>{timing}</p>
                        </div>
                        <div className='flex gap-5 py-2 text-gray-600'>
                            <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location}</p>
                            <p><FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> Salary : {salary}</p>
                        </div>
                    </div>
                </div> 
                <Link to={`/singlefeaturedJob/${id}`}><button className='mt-3 mb-3 btn-md bg-blue-600 text-white hover:bg-orange-400'>View Details</button></Link>
                
            </div>
        </div>
    );
};

export default AppliedJobsItem;