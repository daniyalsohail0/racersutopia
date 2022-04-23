import React from 'react'

const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-8 pb-8'>
        <div className='py-12 '>
            <h1 className='md:text-8xl text-6xl text-white text-center uppercase'>
                Meet The Crew
            </h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-12 py-4 w-3/4'>
            <div className='flex flex-col border-black border-2 white-glassmorphism'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                        Liam
                    </h1>
                    <p className='text-white pr-4 py-3'>
                        CEO / Founder
                    </p>
                </div>
                <img src='./cars/ceo.png' alt='' className=''/>
            </div>
            <div className='flex flex-col border-black border-2 white-glassmorphism'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                        Theo
                    </h1>
                    <p className='text-white pr-4 py-3'>
                        Game Designer
                    </p>
                </div>
                <img src='./cars/game.png' alt='' className=''/>
            </div>
            <div className='flex flex-col border-black border-2 white-glassmorphism'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                        Amelia
                    </h1>
                    <p className='text-white pr-4 py-3'>
                        CFO
                    </p>
                </div>
                <img src='./cars/lady.png' alt='' className=''/>
            </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 py-4 md:w-1/2 w-3/4'>
            <div className='flex flex-col border-black border-2 white-glassmorphism'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                        Avinach
                    </h1>
                    <p className='text-white pr-4 py-3'>
                        CMO
                    </p>
                </div>
                <img src='./cars/tech.png' alt='' className=''/>
            </div>
            <div className='flex flex-col border-black border-2 white-glassmorphism'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                        Weisheng
                    </h1>
                    <p className='text-white pr-4 py-3'>
                        Graphic Head 
                    </p>
                </div>
                <img src='./cars/design.png' alt='' className=''/>
            </div>
        </div>
    </div>
  )
}

export default Team