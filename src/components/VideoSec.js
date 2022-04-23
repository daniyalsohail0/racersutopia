import React from 'react'

const VideoSec = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
          <img src='./cars/image00001.gif' />
        </div>
        <div className='flex flex-col justify-center items-center py-10 w-5/6'>
            <h1 className='md:text-6xl text-3xl text-white uppercase'>
                The <span className='text-[#892CDC]'>Mystery</span> Truck.
            </h1>
            <p className='text-white text-center'>
              First edition of Racers utopia  NFT release will have only 7800 unique CARS. Each car is randomly packed in a MYSTERY TRUCK. So there will be 7800 Mystery Trucks available for Mint at IGO EVENT. 
            </p>
            <p className='text-white text-center'>
              Mystery trucks are classified as 6400 COMMON TRUCKS, 1200 UNCOMMON & 200 RARE TRUCKS.
            </p>
            <table className='border-2 border-white border-solid'>
              <tr className='text-white px-2'>
                <td>
                  COMMON TRUCK
                </td>
                <td>
                  | Level ⭐️ Car
                </td>
              </tr>
              <tr className='text-white px-2'>
                <td>
                  UNCOMMON TRUCK
                </td>
                <td>
                  | Level ⭐️⭐️ Car
                </td>
              </tr>
              <tr className='text-white px-2'>
                <td>
                  RARE TRUCK
                </td>
                <td>
                  | Level ⭐️⭐️⭐️Car
                </td>
              </tr>
            </table>
            <p className='text-white text-center'>
              Minting a mystery Truck means you will get one of our Common , Uncommon or Rare Truck.
            </p>
        </div>
        <div className='flex justify-center items-center py-4 w-5/6'>
            <iframe className='md:w-[1024px] md:h-[520px] w-96 h-72 shadow-md shadow-cyan-400 rounded-xl' src="https://www.youtube.com/embed/HIbCq3RvUhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </div>
  )
}

export default VideoSec