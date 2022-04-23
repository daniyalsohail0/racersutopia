import React from 'react'

const Partners = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-5xl text-4xl text-white uppercase text-center py-6'>Technical Partners</h1>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 md:p-8 p-4 md:w-3/5 w-3/4'>
            <div>
                <img src='./cars/binance.png' alt='' className='py-5' />
            </div>
            <div>
                <img src='./partners/steam.png' alt='' className='' />
            </div>
            <div>
                <img src='./cars/unreal-e.png' alt='' className='py-3' />
            </div>
            <div>
                <img src='./cars/oculus.jpg' alt='' className='py-7' />
            </div>
        </div>
        <div className='border-2 border-cyan-400 rounded-xl shadow-md shadow-cyan-400 md:w-1/2 w-5/6 flex justify-center items-center m-4'>
            <h1 className='text-xl text-white text-center p-4'>
                * For Tokenomics and Roadmap, kindly refer our whitepaper.
            </h1>
        </div>
        <div>
            <h1 className='md:text-5xl text-4xl text-white uppercase text-center py-6'>
                PRESS ABOUT US
            </h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-2 m-2'>
                <a href='https://www.benzinga.com/amp/content/26630678' target="_blank" rel="noreferrer">
                    <img src='./partners/benzinga.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://coinmarketcap.com/headlines/news/metaverse-based-racing-game-racers-utopia-is-the-perfect-balance-between-racing-gaming-and-the-blockchain/'  target="_blank" rel="noreferrer">
                    <img src='./partners/coinmarketcap.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://finance.yahoo.com/news/racer-utopia-equipped-change-dynamics-112900092.html'  target="_blank" rel="noreferrer">
                    <img src='./partners/yahoofinance.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://www.yahoo.com/now/racer-utopia-equipped-change-dynamics-112900092.html'  target="_blank" rel="noreferrer">
                    <img src='./partners/yahoo.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://www.bitcoininsider.org/article/160128/metaverse-based-racing-game-racers-utopia-perfect-balance-between-racing-gaming-and'  target="_blank" rel="noreferrer">
                    <img src='./partners/bitcoininsider.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://cryptodaily.co.uk/2022/04/metaverse-based-racing-game-racers-utopia-is-the-perfect-balance-between-racing-gaming-and-the-blockchain' target="_blank" rel="noreferrer">
                    <img src='./partners/coingecko.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://cryptodaily.co.uk/2022/04/metaverse-based-racing-game-racers-utopia-is-the-perfect-balance-between-racing-gaming-and-the-blockchain'  target="_blank" rel="noreferrer">
                <img src='./partners/cryptodaily.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://www.digitaljournal.com/pr/racers-utopia-is-equipped-to-change-the-dynamics-of-gaming-on-the-metaverse'  target="_blank" rel="noreferrer">
                <img src='./partners/digitaljournal.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://www.streetinsider.com/dr/news.php?id=19914358&gfv=1'  target="_blank" rel="noreferrer">
                    <img src='./partners/streetinsider.png' alt=''className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
                <a href='https://techbullion.com/racers-utopia-is-equipped-to-change-the-dynamics-of-gaming-on-the-metaverse/'  target="_blank" rel="noreferrer">
                    <img src='./partners/techbullion.png' alt='' className='bg-white h-32 w-60 cursor-pointer'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Partners