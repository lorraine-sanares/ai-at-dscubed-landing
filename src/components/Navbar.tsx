"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMobileMenu = () => {
        if (isOpen) setIsOpen(false);
    };

    return (
        <nav
            className={`text-white w-full top-0 left-0 z-50 sticky transition-all duration-500 ${scrolled ? 'bg-[#060C14]/95 shadow-lg backdrop-blur-md border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 h-16">
                {/* Logo */}
                <Link href="#hero" onClick={closeMobileMenu} className="flex items-center space-x-3 group">
                    <Image
                        src="/iconlogo.png"
                        alt="Logo"
                        width={1440}
                        height={1440}
                        className="w-auto h-9 group-hover:scale-105 transition-transform"
                        quality={100}
                        priority
                    />
                </Link>

                {/* Hamburger Icon (for mobile) */}
                <button
                    className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <div className={`${isOpen ? "flex absolute top-16 left-0 right-0 flex-col bg-[#060C14]/95 backdrop-blur-md border-b border-white/10 shadow-lg p-6" : "hidden"} md:relative md:flex md:top-0 md:bg-transparent md:shadow-none md:border-0 md:p-0`}>
                    <ul className="md:flex md:items-center md:space-x-10 space-y-4 md:space-y-0">
                        <li>
                            <a
                                href="#about"
                                onClick={closeMobileMenu}
                                className="block py-2 text-zinc-200 hover:text-white transition-all relative group"
                            >
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#doing"
                                onClick={closeMobileMenu}
                                className="block py-2 text-zinc-200 hover:text-white transition-all relative group"
                            >
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#signup"
                                onClick={closeMobileMenu}
                                className="block py-2 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all rounded-full text-white font-medium"
                            >
                                Join Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
