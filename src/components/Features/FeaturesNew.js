import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const FeaturesNew = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center">
        <div className="pb-4 w-full flex justify-center items-center">
            <img src='./cars/14.png' alt='' className="w-full"/>
        </div>
        <h1 className='md:text-6xl text-3xl text-white py-7 uppercase'>
            Features
        </h1>
        <div className="feature w-full">
            <Carousel breakPoints={breakPoints}>
                <Item>
                  <div className="w-[200px] h-[300px]">
                      <img
                      className="rounded-xl border-2 border-teal-400 shadow-md shadow-teal-400"
                      src="./cars/1.jpg"
                      alt="First slide"
                      />
                      <h3 className='md:text-2xl text-center text-xl text-white pt-2'>Own Collectibles</h3>
                      <p className='text-xs uppercase font-bold font-mono tracking-wide text-gray-500 italic text-center'>Own cars, racetracks, car rentals, workshops, gas station</p>
                  </div>
                </Item>
                <Item>
                  <div className="w-[200px] h-[300px] px-2">
                      <img
                      className="rounded-xl border-2 border-teal-400 shadow-md shadow-teal-400"
                      src="./cars/3.jpg"
                      alt="First slide"
                      />
                      <h3 className='md:text-2xl text-center text-xl text-white pt-2'>Multiple Race Modes</h3>
                      <p className='text-xs uppercase text-gray-500 italic font-bold font-mono tracking-wide m-0 p-0 text-center'>PVE – Various game modes against AI</p>
                      <p className='text-xs uppercase text-gray-500 italic font-bold font-mono tracking-wide m-0 p-0 text-center'>PVP – Race against other players </p>
                  </div>
                </Item>
                <Item>
                  <div className="w-[200px] h-[300px]">
                      <img
                      className="rounded-xl border-2 border-teal-400 shadow-md shadow-teal-400"
                      src="./cars/5.jpg"
                      alt="First slide"
                      />
                      <h3 className='md:text-2xl text-center text-xl text-white pt-2'>Collect Rewards</h3>
                      <p className='text-xs uppercase font-bold font-mono tracking-wide text-gray-500 italic text-center'>Many valuable in-game rewards which you can trade on NFT Market place.</p>
                  </div>
                </Item>
                <Item>
                  <div className="w-[200px] h-[300px]">
                      <img
                      className="rounded-xl border-2 border-teal-400 shadow-md shadow-teal-400"
                      src="./cars/4.jpg"
                      alt="First slide"
                      />
                      <h3 className='md:text-2xl text-center text-xl text-white pt-2'>Staking & Governance</h3>
                      <p className='text-xs uppercase font-bold font-mono tracking-wide text-gray-500 italic text-center'>Passive income by staking Ckey tokens</p>
                  </div>
                </Item>
            </Carousel>
        </div>
    </div>
  )
}

export default FeaturesNew
