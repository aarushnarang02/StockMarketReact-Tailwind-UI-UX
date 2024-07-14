import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Experts from './Experts';



const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-customBlue p-4 fixed w-full'>
            <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
                <div className="text-3xl font-bold">
                    AarushWebDev
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                }
                <ul className="hidden md:flex text-white gap-10">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/experts">Company</a>
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/* Responsive menu */}
                <ul className={`duration-200 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
            ${toggle ? 'left-[0]' : 'left-[-100%]'} 
            `}>
                    <li className="p-5">
                        <a href="/">Home</a>
                    </li>
                    <li className="p-5">
                        <a href="./Experts">Company</a>

                    </li>
                    <li className="p-5">
                        Resources
                    </li>
                    <li className="p-5">
                        About
                    </li>
                    <li className="p-5">
                        Contact
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Header;