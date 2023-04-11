import React from 'react';

const Blogs = () => {
    return (
        <div>
           <div className='py-12 bg-gray-100'>
               <h2 className='font-bold text-3xl'>FAQ's</h2> 
            </div>

            <div className='text-start mx-4 md:mx-36 p-5 rounded-lg bg-gray-200'>
                <h2><span className='font-bold'>1. When should we use Context API?</span></h2>
                <p className='my-2'><span className='font-bold'>Answer:</span> We usually pass information from parent component to a child component using props. But sometimes it gets really complex. So, in such complex situation Context API comes to play its part. <span className='font-bold'>Context API</span>  makes it easier for the parent component to make information available to all it's child instead sending props from one level to other.</p>

                <h2 className='mt-8'><span className='font-bold'>2. What is Custom hook?</span></h2>
                <p className='my-2'><span className='font-bold'>Answer:</span> <span className='font-bold'>React Custom hooks</span>  looks same as the built in hooks like: useSate, useEffect, useCallback. Only the thing is, we define it by ourself. Whenever we want to implement a complex logic in our component or we want to define same logic in multiple component, we define a custom hook. Custom hooks makes it easier to read a component.</p>

                <h2 className='mt-8'><span className='font-bold'>3. What do you understand by useRef hook and useMemo hook ?</span></h2>
                <p className='my-2'><span className='font-bold '>Answer: </span><span className='font-bold' >useRef()</span> returns an object and that object has '.current'  that we can access. It doesn't re-renders the DOM element. It can be used to access a DOM element directly. Again, <span className='font-bold'>useMemo()</span> return a memoized value. It is used to optimize the performance of a component by memoizing the result of a calculation or function.</p>
                
                
            </div>
        </div>
    );
};

export default Blogs;