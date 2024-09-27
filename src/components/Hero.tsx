import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Hero() {
    const beachVid = require("../assets/beachVid.mp4")
    return (
        <div className='w-full h-screen relative'>
            <video  className='w-full h-full object-cover' src={beachVid} 
            autoPlay
            loop 
            muted />    
            <div className='absolute w-full top-0 left-0 bg-green-900/30'></div>   
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>First Class travel</h1> 
                <h2 className='py-4'>Top 1% Locations Worldwide</h2>   
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type='text' placeholder='Search Destination' />
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}} href='https://www.booking.com' /></button>
                    </div>
                </form>
            </div> 
        </div>
    )
}