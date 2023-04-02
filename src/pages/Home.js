import React, { useContext } from 'react';
// import images
import YoussefImg from '../img/home/youssef.jpg';

// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
         {/* text */}
         <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className=' pt-36 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
            Front End <br />Developer <br /> & Free Lancer
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Cairo, Egypt
            </p>
            <Link to={'/Contact'} className='btn mb-[30px]'>
              hire me
            </Link>
          </motion.div>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>

            <img src={YoussefImg} alt=''      
            className='img1'
            />
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default About;
