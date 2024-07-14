import React from "react";
import first from "../assets/img/first.png";
import second from "../assets/img/second.png";
import third from "../assets/img/third.png";

const Plans = () => {
    return (
        <div className="py-[100px] px-2">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
                <div className="shadow-xl h-[500px] my-2 hover:scale-105 duration-300">
                    <img className="w-full h-full" src={first} alt="" />
                </div>
                <div className="shadow-xl h-[500px] my-2 bg-gray-200 hover:scale-105 duration-300">
                    <img className="w-full h-full" src={second} alt="" />
                </div>
                <div className="shadow-xl h-[500px] my-2 hover:scale-105 duration-300">
                    <img className="w-full h-full" src={third} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Plans;