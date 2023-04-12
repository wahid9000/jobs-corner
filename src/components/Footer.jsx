import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-16'>
            <div className='grid text-center md:text-start md:grid-cols-5 gap-8 p-5 py-20 px-10'>
                <div>
                    <h2 className='text-2xl font-bold mb-5'>Jobs Corner</h2>
                    <p className='text-justify text-xs text-gray-400'>Jobs Corner is a job serching website only for you. Search Your dream job with us anytime, anywhere!</p>
                    <img className='mt-7' src="Group 9969.png" alt="" />
                </div>

                <div className='ml-10'>
                    <h3 className='mb-2'>Company</h3>
                    <p className='text-xs text-gray-400'>About Us</p>
                    <p className='text-xs my-2 text-gray-400'>Work</p>
                    <p className='text-xs text-gray-400'>Latest News</p>
                    <p className='text-xs my-2 text-gray-400'>Careers</p>
                </div>

                <div className='ml-10'>
                    <h3 className='mb-2'>Product</h3>
                    <p className='text-xs text-gray-400'>Prototype</p>
                    <p className='text-xs my-2 text-gray-400'>Plans & Pricing</p>
                    <p className='text-xs text-gray-400'>Customers</p>
                    <p className='text-xs my-2 text-gray-400'>Integrations</p>
                </div>
                <div className='ml-10'>
                    <h3 className='mb-3'>Support</h3>
                    <p className='text-xs text-gray-400'>Help Desk</p>
                    <p className='text-xs my-2 text-gray-400'>Sales</p>
                    <p className='text-xs text-gray-400'>Become a Partner</p>
                    <p className='text-xs my-2 text-gray-400'>Developers</p>
                </div>
                <div className='ml-5'>
                    <h3 className='mb-2'>Contact</h3>
                    <p className='text-xs text-gray-400'>524 Broadway , NYC</p>
                    <p className='text-xs my-2 text-gray-400'>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className=' p-7 text-xs flex justify-between'>
                <p className=' text-gray-400'>@2023 JobsCorner. All Rights Reserved</p>
                <p className='md:mr-8 text-gray-400'>Powered By JobsCorner</p>
            </div>
            
        </div>
    );
};

export default Footer;