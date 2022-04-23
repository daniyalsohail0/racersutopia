import React from 'react'

const InfoCards = () => {
  return (
    <div className='flex'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2 py-2'>
            <div className='flex flex-col justify-start bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded'>
                <h1 className='text-white text-2xl text-mono tracking-widest m-2'>Art & Technology</h1>
                <p className='text-white text-mono tracking-wide m-2'>A complex DNA with hundreds of genes variations and various color layers.</p>
            </div>
            <div className='flex flex-col justify-start bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded'>
                <h1 className='text-white text-2xl text-mono tracking-widest m-2'>NFT Cars</h1>
                <p className='text-white text-mono tracking-wide m-2'>A complex DNA with hundreds of genes variations and various color layers.</p>
            </div>
            <div className='flex flex-col justify-start bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded'>
                <h1 className='text-white text-2xl text-mono tracking-widest m-2'>Binance Blockchain</h1>
                <p className='text-white text-mono tracking-wide m-2'>Designed on cutting-edge state-of-the-art blockchain for best experience</p>
            </div>
            <div className='flex flex-col justify-start bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded'>
                <h1 className='text-white text-2xl text-mono tracking-widest m-2'>First Car Battles</h1>
                <p className='text-white text-mono tracking-wide m-2'>Battle on the Arena, and win BNB or NFT Cars.</p>
            </div>
        </div>
    </div>
  )
}

export default InfoCards