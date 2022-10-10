import React from 'react';
import { Link } from 'react-router-dom';
import {QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    return (
        <nav className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold text-sky-900">Quiz<QuestionMarkCircleIcon className='h-8 w-8 text-orange-600'/>Mania</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/' className='text-xl font-semibold text-sky-900'>Home</Link></li>
                        <li><Link to='/statistics' className='text-xl font-semibold text-sky-900'>Statistics</Link></li>
                        <li><Link to='/blogs' className='text-xl font-semibold text-sky-900'>Blogs</Link></li>
                        <li><Link to='/about' className='text-xl font-semibold text-sky-900'>About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;