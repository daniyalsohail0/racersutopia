import React, {useState, useEffect} from 'react'
import { BsFillGiftFill, BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const Countdown = () => {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  
  useEffect(() => {
    var timer;
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if(seconds===59){
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if(minutes===59){
        setHours(hours + 1);
        setMinutes(0);
      }

    }, 1000)

    return () => clearInterval(timer);

  });

  return (
    <div className='flex flex-col md:justify-between justify-center items-center pb-16'>
        <div className='md:w-3/4 py-8 md:px-4'>
          <h1 className='md:text-7xl text-3xl text-center text-white tracking-wide py-4'><span className='text-[#892CDC]'>ILO</span> EVENT</h1>
          <div className='flex flex-col justify-center items-center white-glassmorphism p-4 shadow-md shadow-cyan-400'>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>SUPER ILO EVENT</h1>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>ON</h1>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>PINKSALE</h1>
            <div className='flex flex-col justify-center items-center'>
                <table className='text-center'>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Days</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Hours</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Mins</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Secs</th>
                  <tr>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>9:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{hours}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{minutes}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{seconds}</td>
                  </tr>
                </table>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                  Join Now
                </button>
            </div>
          </div>
          <div className='flex md:justify-center justify-between items-center gap-2 p-4'>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                    <div className='pt-1 px-2 items-center'><BsFillArrowUpRightSquareFill /></div>
                    <a className='px-2' href='https://gleam.io/mghvM/racers-utopia-presale-whitelist-competition' target='_blank' rel='noreferrer'>Whitelist</a>
                </button>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>                      <div className='pt-1 px-2 items-center'><BsFillGiftFill /></div>
                    <a className='px-2' href='https://gleam.io/jTTXJ/racersutopia-airdrop-campaign' target='_blank' rel="noreferrer">Airdrop</a>
                </button>
          </div>
        </div>
        
    </div>
  )
}

export default Countdown