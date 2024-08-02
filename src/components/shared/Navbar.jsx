import React, { useState } from 'react';
import Logo from '../svgs/Logo';
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import Link from 'next/link';
import { navbarData } from '@/utils/data';
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [subItemTitle, setSubItemTitle] = useState('');
    const [subItems, setSubItems] = useState([]);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setSubItemTitle('');
        setSubItems([]);
    };

    const handleMenuItemClick = (item) => {
        if (item.subItems.length) {
            setSubItemTitle(item.title);
            setSubItems(item.subItems);
            setIsSubMenuOpen(true);
        } else {
            setIsSubMenuOpen(false);
        }
    };

    return (
        <div className='relative'>
            <nav className='container bg-white h-[115px] flex justify-between items-center px-4 shadow'>
                <div className='flex gap-[1.5rem] items-center'>
                    <Logo />
                    <button
                        type="button"
                        className="text-[40px] transition-transform duration-300"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <MdOutlineClose /> : <CgMenuLeft />}
                    </button>
                </div>

                <button className='btn btn-cta bg-primary text-white'>Apply now</button>
            </nav>

            {/* Dropdown Menu */}
            <div className={`absolute top-[115px] left-0 w-full bg-white shadow-lg transition-transform duration-300 container flex ${isMenuOpen ? 'opacity-100 translate-y-0 animate-slideDown' : 'opacity-0 -translate-y-4 pointer-events-none animate-slideUp'}`}>
                <ul className='flex flex-col py-4 space-y-2 w-[200px] lg:w-[300px]'>
                    {navbarData?.map((item, index) => (
                        <li key={item.id} className='w-full py-[1rem]'>
                            <Link
                                href={item.path}
                                className='hover:text-[#75227d] trans text-[#424554] whitespace-nowrap text-xl flex justify-between'
                                onClick={() => handleMenuItemClick(item)}
                            >
                                {item.title} {item.subItems.length ? <button>
                                    <IoIosArrowForward className='text-sm' />
                                </button> : null}
                            </Link>
                        </li>
                    ))}
                </ul>

                {subItems?.length ? (
                    <>
                        <div className='border-l border-gray-secondary mx-[2rem] lg:mx-[4rem] my-6'></div>
                        <ul className={`flex flex-col py-4 space-y-2 ${isSubMenuOpen ? 'animate-slideDown' : 'animate-slideUp'}`}>
                            <li className='w-full py-[1rem]'>
                                <div className='cursor-default trans text-dark whitespace-nowrap text-xl flex items-center gap-[1rem]'>
                                    {subItems.length ? <button>
                                        <IoIosArrowForward className='text-sm rotate-180 text-dark relative top-[2px]' />
                                    </button> : null}
                                    {subItemTitle}
                                </div>
                            </li>
                            {subItems?.map((item, index) => (
                                <li key={item.id} className='w-full py-[1rem]'>
                                    <Link
                                        href={item.path}
                                        className='hover:text-[#75227d] trans text-[#424554] whitespace-nowrap text-base flex justify-between'
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
