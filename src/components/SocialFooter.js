import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'

const SocialFooter = () => {
  return (
    <div className='flex flex-col justify-center items-center md:p-28 p-8'>
        <h1 className='md:text-8xl text-3xl text-white text-center w-5/6'><span className='text-[#892CDC]'>JOIN</span> US ON</h1>
        <div className='grid grid-cols-4 gap-2 p-4 md:w-3/6 w-full border-2 border-cyan-400 rounded-xl shadow-md shadow-cyan-400 py-8 m-4'>
        <a href='https://youtube.com/channel/UCikk3coHDPkwVlX3rHjwHOQ' target='_blank' rel="noreferrer">
          <img src='./cars/youtube.gif' alt=''/>
        </a>
        <a href='https://discord.gg/qMes9y3B' target='_blank' rel="noreferrer">
          <img src='./cars/discord.gif' alt='' />
        </a>
        <a href='https://twitter.com/racersutopia' target='_blank' rel="noreferrer">
          <img src='./cars/twitter.gif' alt=''/>
        </a>
        <a href="https://t.me/racersutopia" target='_blank' rel="noreferrer">
          <img src='./cars/telegram.gif' alt='' />
        </a>            
        </div>
    </div>
  )
}

export default SocialFooter