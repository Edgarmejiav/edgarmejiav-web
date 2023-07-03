// create headr component with tailwind css
'use client'
import Link from "next/link";
import {useState} from 'react';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={' fixed top-0 py-10 backdrop-blur w-full flex justify-center items-center justify-around h-14 text-white text-2xl font-semibold'
                +
                (isOpen
                    ? ' overflow-hidden min-h-screen  bg-white bg-opacity-40 backdrop-blur-lg'
                    : '')
            }
        >

            {!isOpen &&<div>
                <Link href="/">
                    <h1 className="text-xl sm:text-2xl">EdgarMejiaV</h1>
                </Link>
            </div>}
            {!isOpen && <div className="sm:block hidden  sm:flex  sm:flex-row sm:gap-10 ">
                <Link href="/apps">
                    <h1 className="text-xs sm:text-2xl">Apps</h1>
                </Link>
                <Link href="/about">
                    <h1 className="text-xs sm:text-2xl">Acerca de</h1>
                </Link>
            </div>}

            {/* Mobile Menu */}
            <nav className="sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:text-gray-300 focus:outline-none"
                >
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Links */}
                {isOpen && (
                    <div className="absolute top-14 inset-x-0  bg-opacity-90 text-white">
                        <div className="flex flex-col gap-4 p-4">
                            <Link href="/">
                                <h1 className="text-xl">EdgarMejiaV</h1>
                            </Link>
                            <Link href="/apps">
                                <h1 className="text-xl">Apps</h1>
                            </Link>
                            <Link href="/about">
                                <h1 className="text-xl">Acerca de</h1>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </nav>
    );
};
