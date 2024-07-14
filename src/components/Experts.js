import React from "react";
import stockmarket from "../assets/img/stockmarket.jpg";

const Expert = () => {
   return (
      <div className="max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-3">
         <div className="col-span-2 md:w-[80%] text-center">
            <p className="text-center text-[60px] font-bold">Bull vs Bear Market</p>
            <img src={stockmarket} alt="" />
         </div>
         <div className="col-span-1 flex flex-col items-center">
            <h1 className="text-[60px] font-bold">Daily Stats</h1>
            <p className="my-2 text-justify">The stock market is where companies sell ownership shares to investors via exchanges like the NYSE and Nasdaq, with brokers facilitating transactions. Each share grants ownership stakes, dividends, and voting rights. Prices vary based on supply, demand, company performance, economic conditions, and investor sentiment. Stock indexes reflect stock group performance, indicating market trends. Investors use strategies ranging from long-term investment to short-term trading to leverage these fluctuations. </p>
            <button className="w-[30%] bg-black text-white p-3 rounded font-bold">Get started</button>
         </div>
      </div>
   )
}

export default Expert;