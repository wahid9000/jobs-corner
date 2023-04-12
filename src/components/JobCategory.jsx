import React, { useEffect, useState } from 'react';
import SingleJobCategory from './SingleJobCategory';

const JobCategory = () => {

    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    
    return (
        <div className='mt-24'>
            <h2 className='text-3xl font-bold'>Job Category List</h2>
            <p className='py-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='mt-10 grid md: grid-cols-2 lg:grid-cols-4 gap-5 text-start'>
                {
                    categories.map(category => <SingleJobCategory
                    key={category.id}
                    category={category}>
                    </SingleJobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;