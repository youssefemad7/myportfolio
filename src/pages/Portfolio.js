import React, { useContext } from 'react';
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';
import Image7 from '../img/portfolio/7.png';
import Image8 from '../img/portfolio/8.png';
import Image9 from '../img/portfolio/9.png';


// CSS
import './App.css'

// import context
import { CursorContext } from '../context/CursorContext';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
  

      <div className='container mx-auto h-full relative '>

        <div className='flex flex-col row lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 '>
        
         
          {/* image grid */}
          <div // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler} 
            className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 gap-8  port 	'

           
          >
            {/* image */}

        <div className='con max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden   '>
            <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image1}
                alt=''
              />          <div class="overlay">
         <div class="text">
      <a href='https://github.com/youssefemad7/firstone/tree/main'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://firstone-git-main-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
      
        <div className='con max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden '>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image2}
                alt=''
              />     <div class="overlay">
    <div class="text">
      <a href='https://github.com/youssefemad7/kudzoka'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://kudzoka-git-main-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
        <div className='con max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image3}
                alt=''
              />  
              <div class="overlay">
              <div class="text">
      <a href='https://github.com/youssefemad7/watces'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://watces-git-main-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
     
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con'>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image4}
                alt=''
              />     <div class="overlay">
    <div class="text">
      <a href='https://github.com/youssefemad7/5amsat'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://5amsat-five.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con'>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image5}
                alt=''
              />     <div class="overlay">
     <div class="text">
      <a href='https://github.com/youssefemad7/bootstrap'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://bootstrap-12123-7ewqmsmxf-youssefemad7.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
    
        <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con'>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image6}
                alt=''
              />     <div class="overlay">
     <div class="text">
      <a href='https://github.com/youssefemad7/jspure'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://jspure-lenx.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
        <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con'>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image7}
                alt=''
              />     <div class="overlay">
     <div class="text">
      <a href='https://github.com/youssefemad7/port'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://port-liard-beta.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
        <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con'>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image8}
                alt=''
              />     <div class="overlay">
     <div class="text">
      <a href='https://github.com/youssefemad7/Restaurant-react'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://restaurant-reactjs.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
        <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con'>
        <img
                className='object-cover h-full lg:h-[220px]  image'
                src={Image9}
                alt=''
              />     <div class="overlay">
     <div class="text">
      <a href='https://github.com/youssefemad7/E-commerce-React'> 
      <FontAwesomeIcon icon={faGithub}   className='iconport'/>
      </a>
      <a href='https://e-commerce-with-reactjs.vercel.app/'>
      <FontAwesomeIcon icon={faLink}   className='iconport'/>

      </a>


    </div>
  </div>
        </div>
          
            
           
          
            
          </div>
        </div>
      </div>
  );
};

export default Portfolio;
