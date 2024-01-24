import React, { useState } from 'react'
import Cards from '../components/Cards'
import TodoProject from '../assets/TodoProject.png'
function Services() {
    const [pname,setPname]=useState('TaskManagement Project')
    const [desc,setDesc]=useState('Web Project with Add,Delete,Create,Update tasks features.')
    const [tag,setTag]=useState([
        {
        tag1:"Java",
        tag2:"React",
        tag3:"MySQL"
}])
return (
    <div className='main-container'>
      <h1 className='font-bold mt-5 text-3xl md:text-5xl underline text-center'>Projects</h1>
  
      <div className="boxes flex flex-col md:flex-row w-full mt-8 md:mt-16 space-y-4 md:space-y-0 space-x-0 md:space-x-5 justify-center">
  
        <div className='text-center px-4 py-4 justify-center bg-gray-200 space-y-2 shadow-lg rounded-xl md:w-1/3'>
          <a href="" className='text-3xl md:text-4xl shadow-lg text-center'><i class="fa-solid fa-code"></i></a>
          <h2 className='text-3xl md:text-4xl font-semibold'>Amazon Clone</h2>
          <p className="text-sm md:text-base">Developed Clone of Amazon Home Page.Learned Advance CSS Properties & HTML.</p>
          <br />
          <a className='hover:bg-white pl-3 md:pl-5 px-2 md:px-3 py-1 md:py-2 bg-orange-500 rounded-full' href="https://github.com/rishu6263/Amazon-Clone">Check More...</a>
        </div>
  
        <div className='text-center px-4 py-4 justify-center bg-gray-200 space-y-2 shadow-lg rounded-xl md:w-1/3'>
          <a href="" className='text-3xl md:text-4xl shadow-lg text-center'><i class="fa-solid fa-code"></i></a>
          <h2 className='text-3xl md:text-4xl font-semibold'>Task Management System</h2>
          <p className="text-sm md:text-base"> Web Project with Login,Logout,Add,Delete & Update tasks features.Implemented Frontend Authentication using React Hooks.Learned Integration of Frontend with backend( SpringBoot) databases and APIs.</p>
          <br />
          <a className='hover:bg-white pl-3 md:pl-5 px-2 md:px-3 py-1 md:py-2 bg-orange-500 rounded-full' href="https://github.com/rishu6263/TaskanagementProject">Check More...</a>
        </div>
  
        <div className='text-center px-4 py-4 justify-center bg-gray-200 space-y-2 shadow-lg rounded-xl md:w-1/3'>
          <a href="" className='text-3xl md:text-4xl shadow-lg text-center'><i class="fa-solid fa-code"></i></a>
          <h2 className='text-3xl md:text-4xl font-semibold'>Hackathon Project</h2>
          <p className="text-sm md:text-base">Team Project Built in Hackathon.Developed Mind Bot(Prototype) in hackathon organized by IEDC club in our college.This project is based ontheme Health Care to solve problems for people who are suffering with mental problems.</p>
          <br />
          <a className='hover:bg-white pl-3 md:pl-5 px-2 md:px-3 py-1 md:py-2 bg-orange-500 rounded-full' href="https://github.com/rishu6263/Hackathon-project">Check More...</a>
        </div>
  
      </div>
    </div>
  );
  
}

export default Services