import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeaturedJob = ({singlefeaturedJob}) => {
    const {company_logo, company_name, job_title, type, timing, location, salary, id} = singlefeaturedJob;
    return (
        <div className='px-3 py-3 hover:shadow-2xl border rounded-lg'>
            <img className='p-5 mb-3' src={company_logo} alt="" />
            <h2 className='font-bold'>{job_title}</h2>
            <p className='text-gray-400'><small>{company_name}</small></p>
            <div className='flex gap-3 my-3'>
                <p className='border py-1 px-2 text-blue-600 rounded-md border-gray-400'>{type}</p>
                <p className='border py-1 px-2 text-blue-600 rounded-md border-gray-400'>{timing}</p>
            </div>
            <div className='flex gap-6 my-3'>
              <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location}</p>  
              <p><FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> Salary : {salary}</p>
            </div>

            <Link to={`/singlefeaturedJob/${id}`}><button className='btn-md bg-blue-600 text-white hover:bg-orange-400'>View Details</button></Link> 
            
        </div>
    );
};

export default SingleFeaturedJob;