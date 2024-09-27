import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest} from 'react-icons/fa'

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState (false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TRAVEL.DE</h1>
      </div>
      <ul className='hidden md:flex'>
        <li><a href="index.html">Home</a></li>
        <li><a href="https://www.booking.com">Destination</a></li>
        <li><a href="https://www.booking.com">Travel</a></li>
        <li><a href="https://www.booking.com">View</a></li>
        <li><a href="https://www.booking.com">Book</a></li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-3' size={20} />
        <BsPerson size={20} />
      </div>
      
      {/*Nav Menu Mobel */}

      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        
      </div>
      
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>TRAVEL.DE</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destination</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>

          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>

          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaInstagram className='icon'/>
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </ul>
      </div>
    </div>
  )
}
