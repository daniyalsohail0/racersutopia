import React, {useState} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {BsWallet} from 'react-icons/bs'
import { ethers } from "ethers";



const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {

    if(window.ethereum) {
      alert('Meta Mask detected')
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        setWalletAddress(accounts[0]);
        alert(accounts[0]);
      }
      catch(error) {
        alert('Error connecting..')
      }
    }
    else {
      alert('Meta Mask not detected')
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <nav className="w-full flex md:justify-center justify-between items-center md:p-4 pr-6 bg-transparent absolute">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src='./logo.png' alt="logo" className="md:w-32 w-28" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li>
          <a href="https://whitepaperv.1.racersutopia.com" target='_blank' rel="noreferrer" className="text-white mx-3">Whitepaper</a>
        </li>
        <li>
          <a href="https://whitepaperv.1.racersutopia.com/overall-documentation/tokenomics" target='_blank' rel="noreferrer" className="text-white mx-3">Tokenomics</a>
        </li>
        <li>
          <a href="https://whitepaperv.1.racersutopia.com/overall-documentation/roadmap" target='_blank' rel="noreferrer" className="text-white mx-3">Roadmap</a>
        </li>
        <li>
          <a href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/Carkey_0xd27065EC88505E9AEe48e866d34f7A4098C977dA.pdf" target='_blank' rel="noreferrer" className="text-white mx-3">Audit</a>
        </li>
        <li>
          <a href='/' className="text-white mx-3">Marketplace</a>
        </li>
        <button 
          onClick={requestAccount}
          className="flex justify-between gap-2 py-2 px-7 mx-4 rounded bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 cursor-pointer">
          <BsWallet className="pt-1 text-xl"/>
          <span>Connect Wallet</span>
        </button>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <li>
              <a href="https://whitepaperv.1.racersutopia.com" target='_blank' rel="noreferrer" className="text-white mx-3">Whitepaper</a>
            </li>
            <li>
              <a href="https://whitepaperv.1.racersutopia.com/overall-documentation/tokenomics" target='_blank' rel="noreferrer" className="text-white mx-3">Tokenomics</a>
            </li>
            <li>
              <a href="https://whitepaperv.1.racersutopia.com/overall-documentation/roadmap" target='_blank' rel="noreferrer" className="text-white mx-3">Roadmap</a>
            </li>
            <li>
              <a href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/Carkey_0xd27065EC88505E9AEe48e866d34f7A4098C977dA.pdf" target='_blank' rel="noreferrer" className="text-white mx-3">Audit</a>
            </li>
            <li>
              <a href='/' className="text-white mx-3">Marketplace</a>
            </li>
            <li onClick={requestAccount} className="flex justify-between gap-2 py-2 px-7 mx-4 my-4 rounded bg-gradient-to-l from-cyan-700 to-blue-900 hover:bg-gradient-to-r hover:shadow-md hover:shadow-cyan-400 duration-500 cursor-pointer">
              <BsWallet className="pt-1 text-xl"/>
              <span>Wallet</span>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
