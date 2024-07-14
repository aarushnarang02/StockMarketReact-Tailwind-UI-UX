import React from "react";
import { ReactTyped } from "react-typed";


const Banner = () => {
    return (
        <div className="bg-customBlue w-full py-[50px]">
            <div className="max-w-[1240px] py-[100px] mx-auto text-center font-bold ">
                <div className="text-2xl p-[12px] md:text-4xl md:p-[24px]">
                    Code Like A Pro
                </div>
                <div className="text:5xl p=-[12px] md:text-[60px] md:p-[24px] text-white">
                    ReactJS + TailwindCSS
                </div>
                <div className="text-[30px] p-[12px] md:text-[60px] md:p-[24px] text-white">
                    Let's
                    <ReactTyped
                    className="pl-3" 
                    strings={[" Design"," Build"," Keep Experimenting!"]} 
                    typeSpeed={80} 
                    loop
                    backSpeed={40} 
                    />
                </div>
                <button className="bg-black text-white p-3 rounded font-bold">Get started</button>
            </div>
        </div>
    )
} 

export default Banner;