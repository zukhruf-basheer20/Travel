import React from "react";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="w-full bg-gray-100 py-16">
            <div className="sm:flex text-center justify-between items-center">
                <h1>TRAVEL.DE</h1>
                <div className="flex justify-between w-full sm:max-w-[280px] my-4">
                <FaFacebook className='icon' />
                <FaInstagram className='icon'/>
                <FaTwitter className='icon' />
                <FaYoutube className='icon' />
                <FaPinterest className='icon' />
                </div>
            </div>

            <div className="flex justify-between">
                <ul className="lg:flex">
                    <li>About Us</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className="text-right lg:flex">
                <li><a href="index.html">Home</a></li>
                <li><a href="https://www.booking.com">Destination</a></li>
                <li><a href="https://www.booking.com">Travel</a></li>
                <li><a href="https://www.booking.com">View</a></li>
                <li><a href="https://www.booking.com">Book</a></li>
                </ul>
            </div>

        </div>
    )
}