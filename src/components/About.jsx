import React, { useState } from 'react'
import MyImage from '../assets/rk1.jpg'
function About() {
    const [data,setData]=useState(
        {
            title : `Java Backend & React Frontend Developer`,
            desc:`Hello! I'm Rishabh Dwivedi , a enthusiastic Information Science & Engineering student at Bangalore Institute of Technology. 🎓

            🚀 My journey in the world of technology has been an exhilarating one, driven by my insatiable curiosity and love for software engineering. I have honed my skills in Data Structures and Algorithms, and I have good command in Java.
            
            🌱 Currently, I am expanding my knowledge by diving deep into the world of Java-based technologies, including Spring Boot, Spring MVC, Spring JPA, and Hibernate. I believe in the importance of continuous learning and staying at the forefront of the ever-evolving tech landscape.
            
            💼 Alongside my academic pursuits, I'm always on the lookout for exciting opportunities to apply my skills and collaborate on innovative projects. Whether it's solving complex problems or contributing to open-source initiatives, I thrive on challenges that push me to grow.,
            Hello! I'm Rishabh Dwivedi , a enthusiastic Information Science & Engineering student at Bangalore Institute of Technology. 🎓

            🚀 My journey in the world of technology has been an exhilarating one, driven by my insatiable curiosity and love for software engineering. I have honed my skills in Data Structures and Algorithms, and I have good command in Java.
            
            🌱 Currently, I am expanding my knowledge by diving deep into the world of Java-based technologies, including Spring Boot, Spring MVC, Spring JPA, and Hibernate. I believe in the importance of continuous learning and staying at the forefront of the ever-evolving tech landscape.
            
            💼 Alongside my academic pursuits, I'm always on the lookout for exciting opportunities to apply my skills and collaborate on innovative projects. Whether it's solving complex problems or contributing to open-source initiatives, I thrive on challenges that push me to grow.`,
            
            button:{
                title1:'Read More...',
                link1:'/read'
            }

        }
      )
      const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };
  const lessParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  return (
    <div className='mt-4 main-container border py-12 bg-gray-300 rounded-2xl'>
  
      <h1 className="font-bold text-5xl underline text-center">About Me</h1>
  
      <div className="box-container flex pt-3 items-center flex-col md:flex-row">
  
        <div className='mb-4 md:mb-0 md:ml-2 w-full md:w-1/2 flex justify-center'>
          <img className='w-1/2 rounded-full shadow-lg' src={MyImage} alt="My Image" />
        </div>
  
        <div className='w-full flex justify-center pt-5 md:pt-0'>
          <div className='space-y-5 w-full md:w-2/3'>
  
            <h1 className='text-4xl font-semibold'>{data.title}</h1>
            <p>{showFullParagraph ? data.desc : data.desc.substring(0, data.desc.length / 2)}</p>
  
            {!showFullParagraph && <button className='pl-5 px-3 py-2 bg-orange-500 rounded-full' onClick={toggleParagraph}>Read More..</button>}
            {showFullParagraph && <button className='pl-5 px-3 py-2 bg-orange-500 rounded-full' onClick={lessParagraph}>Read Less..</button>}
  
          </div>
        </div>
  
      </div>
    </div>
  );  
}

export default About