import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import {FaTelegramPlane} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


const Crew = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center">
        <h1 className='md:text-6xl text-3xl text-white py-7 uppercase'>
            meet the <span className="text-[#892CDC]">crew</span>
        </h1>
        <div className="feature">
            <Carousel breakPoints={breakPoints}>
                <Item>
                  <div className='flex flex-col border-black border-2 white-glassmorphism w-80 h-auto p-3'>
                    <h1 className="text-[#892CDC] md:text-3xl text-xl text-center uppercase tracking-widest">
                      Liam
                    </h1>
                    <img src="./cars/liam.png" alt="" />
                    <h1 className="text-white md:text-xl text-sm py-1 text-center uppercase tracking-wide">
                      CEO / Founder
                    </h1>
                    <div className="flex justify-center gap-2">
                      <a href="https://t.me/liam_racersutopia" target='_blank' rel="noreferrer">
                        <FaTelegramPlane className="text-[20px] text-[#229ED9] hover:cursor-pointer" />
                      </a>
                      <a href="#" onClick={() => window.location = 'mailto:ceo@racersutopia.com'} target='_blank' rel="noreferrer">
                        <MdEmail className="text-[20px] text-white hover:cursor-pointer"/>
                      </a>
                    </div>
                  </div>
                </Item>
                <Item>
                  <div className='flex flex-col border-black border-2 white-glassmorphism w-80 h-auto p-3'>
                    <h1 className="text-[#892CDC] md:text-3xl text-xl text-center uppercase tracking-widest">
                      Theo
                    </h1>
                    <img src="./cars/theo.png" alt="" />
                    <h1 className="text-white md:text-xl text-sm py-1 text-center uppercase tracking-wide">
                      CTO
                    </h1>
                    <div className="flex justify-center gap-2">
                      <a href="https://t.me/Theo_racersutopia" target='_blank' rel="noreferrer">
                        <FaTelegramPlane className="text-[20px] text-[#229ED9] hover:cursor-pointer"/>
                      </a>
                      <a href="#" onClick={() => window.location = 'mailto:cto@racersutopia.com'} target='_blank' rel="noreferrer">
                        <MdEmail className="text-[20px] text-white hover:cursor-pointer"/>
                      </a>
                    </div>
                  </div>
                </Item>
                <Item>
                  <div className='flex flex-col border-black border-2 white-glassmorphism w-80 h-auto p-3'>
                    <h1 className="text-[#892CDC] md:text-3xl text-xl text-center uppercase tracking-widest">
                      Amelia
                    </h1>
                    <img src="./cars/amelia.png" alt="" />
                    <h1 className="text-white md:text-xl text-sm py-1 text-center uppercase tracking-wide">
                      CFO
                    </h1>
                    <div className="flex justify-center gap-2">
                      <a href="https://t.me/CFO_racersutopia" target='_blank' rel="noreferrer">
                        <FaTelegramPlane className="text-[20px] text-[#229ED9] hover:cursor-pointer"/>
                      </a>
                      <a href="#" onClick={() => window.location = 'mailto:cfo@racersutopia.com'} target='_blank' rel="noreferrer">
                        <MdEmail className="text-[20px] text-white hover:cursor-pointer"/>
                      </a>
                    </div>
                  </div>
                </Item>
                <Item>
                  <div className='flex flex-col border-black border-2 white-glassmorphism w-80 h-auto p-3'>
                    <h1 className="text-[#892CDC] md:text-3xl text-xl text-center uppercase tracking-widest">
                      Avinash
                    </h1>
                    <img src="./cars/avinash.png" alt="" />
                    <h1 className="text-white md:text-xl text-sm py-1 text-center uppercase tracking-wide">
                      CMO
                    </h1>
                    <div className="flex justify-center gap-2">
                      <a href="https://t.me/cmo_racersutopia" target='_blank' rel="noreferrer">
                        <FaTelegramPlane className="text-[20px] text-[#229ED9] hover:cursor-pointer"/>
                      </a>
                      <a href="#" onClick={() => window.location = 'mailto:cmo@racersutopia.com'} target='_blank' rel="noreferrer">
                        <MdEmail className="text-[20px] text-white hover:cursor-pointer"/>
                      </a>
                    </div>
                  </div>
                </Item>
                <Item>
                  <div className='flex flex-col border-black border-2 white-glassmorphism w-80 h-auto p-3'>
                    <h1 className="text-[#892CDC] md:text-3xl text-xl text-center uppercase tracking-widest">
                      Weisheng
                    </h1>
                    <img src="./cars/weisheng.png" alt="" />
                    <h1 className="text-white md:text-xl text-sm py-1 text-center uppercase tracking-wide">
                      Graphic Head
                    </h1>
                    <div className="flex justify-center gap-2">
                      <a>
                        <FaTelegramPlane className="text-[20px] text-[#229ED9] hover:cursor-pointer"/>
                      </a>
                      <a href="#" onClick={() => window.location = 'mailto:weisheng@racersutopia'} target='_blank' rel="noreferrer">
                        <MdEmail className="text-[20px] text-white hover:cursor-pointer"/>
                      </a>
                    </div>
                  </div>
                </Item>
            </Carousel>
        </div>
    </div>
  )
}

export default Crew
