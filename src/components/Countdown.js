import React, {useState, useEffect, useRef} from 'react'
import { BsFillGiftFill, BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const Countdown = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('May 14, 2022 13:30:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
      }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className='flex flex-col md:justify-between justify-center items-center pb-16'>
        <div className='md:w-3/4 py-8 md:px-4'>
          <h1 className='md:text-7xl text-3xl text-center text-white tracking-wide py-4'><span className='text-[#892CDC]'>ILO</span> EVENT</h1>
          <div className='flex flex-col justify-center items-center white-glassmorphism p-4 shadow-md shadow-cyan-400'>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>FAIRLAUNCH</h1>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>ON</h1>
            <h1 className='text-white text-3xl uppercase text-center font-sans'>PINKSALE</h1>
            <div className='flex flex-col justify-center items-center'>
                <table className='text-center'>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Days</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Hours</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Mins</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Secs</th>
                  <tr>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerDays}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerHours}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerMinutes}:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-white'>{timerSeconds}</td>
                  </tr>
                </table>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                  <a href='https://www.pinksale.finance/#/launchpad/0xc3C060928d8f109E7997dd64Ff866B98Ddb33C3B?chain=BSC' target='_blank' rel="noreferrer" >Join Now</a>
                </button>
            </div>
          </div>
          <div className='flex md:justify-center justify-between items-center gap-2 p-4'>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                    <div className='pt-1 px-2 items-center'><BsFillArrowUpRightSquareFill /></div>
                    <a className='px-2 text-white' href='#' target='_blank' rel='noreferrer'>Whitelist</a>
                </button>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>                      <div className='pt-1 px-2 items-center'><BsFillGiftFill /></div>
                    <a className='px-2 text-white' href='https://gleam.io/jTTXJ/racersutopia-airdrop-campaign' target='_blank' rel="noreferrer">Airdrop</a>
                </button>
          </div>
        </div>
        
    </div>
  )
}

export default Countdown