import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <div>
      <div className='lg:text-4xl md:text-2xl sm:text-lg font-bold'>
        <span className='flex lg:justify-center'>Find & Discover Players</span>
        <span className='text-blue-800 flex lg:justify-center mt-4'>Near You</span> 
      </div>
      <div>
        
      </div>
      <Search/>
    </div>
  )
}

export default Hero
