import React from "react";

const NewsLetter = () => {
    return (
        <div className="bg-customBlue p-4">
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[20px]">
                <div className="text-white m-2">
                    <h1 className="text-[20px] md:text-[40px] font-bold">Want to catchup?</h1>
                    <span>Sign up to our newsletter and stay up to date.</span>
                </div>
                <div className="m-2">
                    <input type="text" className = "sm:w-full p-3 mb-2 mr-2 text-slate-700" placeholder="Email"></input>
                    <button className="bg-black text-white p-3 rounded font-bold">Notify me</button>
                    <br/>
                    <p className="text-white my-2">
                        We care about our customers.
                        <span className="md:hidden" ><br/></span>
                        Read our <a href="" className="text-black"> Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;