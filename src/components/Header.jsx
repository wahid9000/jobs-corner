import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../utils/ActiveLink';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to="/">Home</ActiveLink></li>
                            <li><ActiveLink to="/applied">Applied Jobs</ActiveLink></li>
                            <li><ActiveLink to="/stat">Statistics</ActiveLink></li>
                            <li><ActiveLink to="/blogs">Blog</ActiveLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="normal-case text-xl">JobsCorner</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/applied">Applied Jobs</ActiveLink></li>
                        <li><ActiveLink to="/stat">Statistics</ActiveLink></li>
                        <li><ActiveLink to="/blogs">Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <button className='btn-md btn-primary bg-blue-600 text-white hover:bg-orange-400'>Start Applying</button>
                </div>
            </div>
        </nav>
    );
    
};

export default Header;