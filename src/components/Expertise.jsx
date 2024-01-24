import React from 'react'
import BannerBackground from '../assets/banner_wallpaper.svg'
function Expertise() {
  return (
    <div className='main-container'>
      <h1 className='text-4xl md:text-5xl text-center font-bold underline mb-10 mt-10'>My Expertise</h1>
  
      <div className='pt-8 md:pt-25 flex flex-col md:flex-row items-center w-full main-container space-y-8 md:space-y-0 space-x-0 md:space-x-2 '>
        
        <div className='w-full md:w-2/3 main-container flex items-center pt-5 pb-7 ' style={{
          background: `url(${BannerBackground})`,
          backgroundSize: 'cover-fit'
        }}>
          <div className="flex w-full justify-center h-100">
            <div className='ms-5 md:ms-10 w-full space-y-1 h-100'>
              <h1 className='text-4xl md:text-5xl font-bold'>I Love Learning Technology</h1>
              <p>This section contains technologies lists that I have learned so far.</p>
              <div className="icons-container space-x-5 flex">
                {/* Add your icons here */}
              </div>
              <br />
              <a className='hover:bg-white mt-0 pl-3 md:pl-5 px-2 md:px-3 py-1 md:py-2 bg-orange-500 rounded-full shadow-lg' href="/contact">Hire Me</a>
            </div>
          </div>
        </div>
  
        <div className='flex flex-wrap w-full justify-center space-x-3'>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>Java</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>Data Structures</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>Algorithm</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>Spring Boot</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>React</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>JavaScript</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>SQL</p>
          <br />
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>MySQL</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>Git/GitHub</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>RestAPI</p>
          <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>PostMan</p>
          {/* <p className='bg-gray-300 hover:bg-orange-500 rounded-full text-center pl-1 pr-1 pt-1 pb-1'>Hibernate(ORM)</p> */}
        </div>
      </div>
    </div>
  )  
}

export default Expertise