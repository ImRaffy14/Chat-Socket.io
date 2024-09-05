import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';


function MainPage() {

    const [isToggled, setIsToggled] = useState(true);

    const handleSideNav = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div className="h-screen flex">
                {/* Sidebar */}
                <div className={`sidebar transition-all duration-300 ${isToggled ? 'w-6/12 lg:w-2/12 md:w-4/12 sm:w-4/12' : 'w-0'} overflow-auto`}>
                    <div className="flex flex-col justify-center my-4">
                        {/* USERS'S RECENTS CHATS */}
                    </div>
                </div>

                {/* Main content */}
                <div className={`flex-grow transition-all duration-300 bg-gray-200 ${isToggled ? 'w-6/12 lg:w-2/12 md:w-8/12 sm:w-8/12' : 'w-full'} overflow-auto`}>
                    <div className="mx-2 my-1">
                        {/* NAVBAR */}
                        <div className="navbar bg-base-100 rounded-xl">
                            <div className="navbar-start">
                                <button className="btn btn-ghost btn-circle" onClick={handleSideNav}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </button>
                            </div>
                            <div className="navbar-center">
                                <a className="btn btn-ghost text-xl">REAL TIME CHAT</a>
                            </div>
                            <div className="navbar-end">
                                <div className={`dropdown dropdown-end `}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className="w-full h-full object-cover" alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <h1 className="ml-3 mb-1">BOBO<span className="badge text-teal-500 ml-2">online</span></h1>
                                        <li>Settings</li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* DATA */}
                        <Routes>
                        {/* COMPONENTS */}
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
