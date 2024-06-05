'use client'

import React from 'react'
const USER_PROFILE = 'https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png';
import Image from 'next/image';
import { HiBars3BottomLeft, HiMiniXMark} from "react-icons/hi2";
import { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div>  
        <div className='flex item-center justify-between mt-5 p-2 border-b-2 border-black'>
            <div>
                <img src="./Images/logo.png" alt="logo" width={50} height={50} className='ml-4'/>
            </div>
            <div className='hidden md:block lg:block'>search</div>
            <div className='flex space-x-4'>
                <div>
                    <button className='hidden md:block lg:block bg-black text-white w-32 h-10 rounded-lg'>Create Post</button>
                </div>
                <div>
                    <button className='hidden md:block lg:block bg-white text-green-600 border-2 border-green-600 w-32 h-10 rounded-lg'>SignIn</button>
                </div>
                <div>
                    <Image src={USER_PROFILE} alt='profileImage' width={30} height={30} className='border-2 border-blue-600 w-10 h-10 rounded-lg'/>
                </div>    
            </div>        
        </div> 
            <div className='block md:hidden lg:hidden'>
                <HiBars3BottomLeft onClick={toggleMenu} className="w-6 h-8 mt-5"/> 
            </div>

            <div
                className={
                menuOpen
                    ? "fixed top-0 left-0 w-[40%] sm:hidden h-96 bg-black mt-[88px] p-10 ease-in-out duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
                }
            >
                
            <div>
                <HiMiniXMark onClick={toggleMenu} className='text-white w-6 h-8 ml-24'/>
            </div>
                <div>
                    <button className='block md:hidden lg:hidden bg-white text-black w-32 h-10 rounded-lg'>Create Post</button>
                    <button className='block md:hidden lg:hidden mt-4 bg-white text-green-600 border-2 border-green-600 w-32 h-10 rounded-lg'>SignIn</button>
                </div>
            </div>
    </div>
  )
}

export default Header
