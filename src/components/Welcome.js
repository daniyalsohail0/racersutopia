import React from 'react'
import { AiFillPlayCircle, AiOutlinePaperClip, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'
import ReactPlayer from 'react-player'


const Welcome = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center blue-glassmorphism border-2 border-cyan-400 md:w-4/6 mx-4 my-16 p-4 shadow-xl shadow-cyan-400 rounded-xl'>
          <h1 className='md:text-4xl text-2xl text-white text-center'>
          "Are you ready to showcase your driving skills and earn?"
          </h1>
        </div>
        <div className='flex justify-center items-center py-4 w-5/6'>
            <iframe className='md:w-[1024px] md:h-[520px] w-96 h-72 shadow-md shadow-cyan-400 rounded-xl' src="https://www.youtube.com/embed/_iTir1wt9Oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='md:w-3/4 md:p-8 p-4 my-8'>
            <h1 className='md:text-5xl text-3xl text-center text-white tracking-wide py-4 uppercase'>NFT Car Racing on <span className='text-[#892CDC]'>Binance Smart Chain</span> </h1>
            <div className='flex justify-center items-center border-2 border-cyan-400 shadow-md shadow-cyan-400 rounded-xl p-2'>
              <p className='text-white tracking-wide my-4 text-center'>Racer’s Utopia is a cutting edge blockchain based NFT racing game which allows players to craft a racing career by participating in races with their top performing cars in PVE mode and compete against other players in PVP mode. By competing in these racing modes, players will be able to earn in-game rewards & Carkey/ Ckey token. </p>
            </div>
        </div>

        <img src='./cars/13.png' alt='' />

        {/*
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=_iTir1wt9Oc' 
            playing = 'true'
            loop = 'true'
            controls = 'false'
            width= '100%'
            height= '100%'
        />
        */}
        
        
        {/*
        <div className='flex md:flex-row flex-col'>
            <button className='flex text-white tracking-wide bg-gradient-to-r from-[#892CDC] to-[#52057B] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-4 md:my-0 m-2'>
                <div className='pt-1 px-2 items-center'><AiFillPlayCircle /></div>
                <span className='px-2'>Mint A NFT Car</span>
            </button>
            <button className='flex text-white tracking-wide bg-gradient-to-r from-[#892CDC] to-[#52057B] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-4 md:my-0 m-2'>
                <div className='pt-1 px-2 items-center'><AiOutlinePaperClip /></div>
                <span className='px-2'>Download Whitepaper</span>
            </button>
        </div>
        */}
    </div>
  )
}

export default Welcome