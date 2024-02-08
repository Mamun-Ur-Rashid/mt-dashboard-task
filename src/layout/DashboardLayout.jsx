
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const DashboardLayout = () => {
    return (
        <div className='flex'>
            {/* side bar */}
            <div className='w-[280px] bg-gray-400 shadow-lg rounded-sm h-screen'>
                <ul className=' flex flex-col px-10 mt-16'>
                    <NavLink to='/dashboard' className="text-white text-lg mb-2 font-bold hover:font-extralight">Dashboard</NavLink>
                    <NavLink to='/user' className="text-white text-lg mb-2 font-bold hover:font-extralight">Users</NavLink>
                    <NavLink to='/role' className="text-white text-lg mb-2 font-bold hover:font-extralight">Roles</NavLink>
                    <li to='/' className="text-white text-lg mb-2 font-bold hover:font-extralight">
                        <details>
                            <summary>Profile</summary>
                            <ul className='flex flex-col'>
                                <NavLink to='/personal' className="text-white text-lg mb-2 font-bold hover:font-extralight"> - Personal</NavLink>
                                <NavLink to='/professional' className="text-white text-lg mb-2 font-bold hover:font-extralight"> - Professional</NavLink>
                            </ul>
                        </details>
                    </li>

                    <NavLink to='/logout' className="text-white text-lg font-bold hover:font-extralight">Logout</NavLink>
                </ul>
            </div>
            {/* main content */}
            <div className='w-full h-screen bg-gray-700'>
                <div>
                    <header className='bg-gray-200 h-10 p-2'>
                        this is header
                    </header>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;