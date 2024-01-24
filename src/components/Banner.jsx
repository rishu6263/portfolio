import React, { useState } from 'react'
import Image from '../assets/rd.jpg'
import BannerBackground from '../assets/banner_wallpaper.svg'

function Banner() {
    const [desc,setDesc]=useState(`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Reprehenderit, natus repellat nesciunt odio autem fugiat modi cumque 
   assumenda quae! Impedit perspiciatis reiciendis iure accusantium sint voluptatem, eligendi quam cum aperiam!`)
   const [prof,setProf]=useState('React & Spring Boot Developer')
   return (
    <div className='mt-5 main-container flex items-center h-full pt-5 pb-7 bg-gray-200' style={{
      background: `url(${BannerBackground})`,
      backgroundSize: 'cover'
    }}>
      <div className="flex w-full justify-center h-full">
        <div className='ms-5 md:ms-10 w-full md:w-2/3 space-y-1 md:h-100 flex-wrap'>
  
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Hi, I am</h3>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Rishabh Dwivedi</h1>
          <h2 className='text-xl md:text-2xl lg:text-3xl'>{prof}</h2>
  
          <div className='flex flex-wrap w-full justify-center space-x-3'>
            {/* Add your content here */}
          </div>
  
          <div className="icons-container space-x-3 md:space-x-5 flex">
            <div className='hover:bg-orange-600 border w-14 h-14 rounded-full bg-gray-700 text-4xl justify-center flex items-center text-white'>
                <a href="https://www.linkedin.com/in/rk-dwivedi/"><i class="fa-brands fa-linkedin" /></a>
            </div>
            <div className='hover:bg-orange-600 border w-14 h-14 rounded-full text-4xl justify-center bg-gray-700 flex items-center text-white'>
            <a href="https://twitter.com/Rishabhd626312"> <i class="fa-brands fa-square-x-twitter" /></a>
            </div>
            <div className='hover:bg-orange-600 border w-14 h-14 rounded-full text-4xl justify-center bg-gray-700 flex items-center text-white'>
            <a href="https://github.com/rishu6263"> <i class="fa-brands fa-github" /></a>
            </div>
            <div className='hover:bg-orange-600 border w-14 h-14 rounded-full text-4xl justify-center bg-gray-700 flex items-center text-white'>
                <a href="https://leetcode.com/rk6263/"><i class="fa-solid fa-code" /></a>
            </div>
        </div>
  
          <br />
  
          <a className='hover:bg-white mt-0 pl-3 md:pl-5 px-2 md:px-3 py-1 md:py-2 bg-orange-500 rounded-full shadow-lg text-sm md:text-base' href="/contact">Contact Me</a>
        </div>
      </div>
  
      <div className='hidden md:flex w-full justify-center'>
        <img className='rounded-full shadow-lg w-1/2 md:w-1/3' src={Image} alt="My Image" />
      </div>
    </div>
  )  
}

export default Banner;