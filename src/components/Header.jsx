import React, { useState } from 'react'
import resume from '../assets/Rishabh-Resume.pdf'

function Header() {
    const [brandName,setBrandName]=useState('Rishabh Dwivedi');
    const [links,setLinks]=useState([
        {
            title:'Home',
            link:'/home',
            id:1
        },
        {
            title:'Skills',
            link:'/skills',
            id:2
        },
        {
            title:'About',
            link:'/about',
            id:3
        },
        {
            title:'Contact',
            link:'/contact',
            id:4
        }
    ])
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = {resume};
      link.download = 'Rishabh-Resume.pdf';
      link.click();
    };
  return (
   <header>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">{brandName}</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
            {links.map((link)=>(
                    <a key={link.id} href={link.link} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            {link.title}
                    </a>
        ))}
    </div>
    <div>
      <a  className="hover:cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={handleDownload}>Download CV</a>
    </div>
  </div>
</nav>
   </header>
  )
}

export default Header