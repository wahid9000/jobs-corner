import React from 'react';

const SingleJobCategory = ({category}) => {
    return (
        <div className='shadow px-3 py-1'>
            <img className='shadow p-5 mb-3' src={category.picture} alt="" />
            <h2>{category.name}</h2>
            <p className='text-gray-400'><small>{category.jobs_available} jobs available</small></p>
        </div>
    );
};

export default SingleJobCategory;