import React, { useContext, useRef } from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
// import email
import emailjs from '@emailjs/browser';
import {
  ImFacebook,
 
  ImInstagram,
  ImGithub,
  ImLinkedin,
  ImGoogle,
  ImMail,
  ImMail2,
  ImMail3,
  ImMail4,
} from 'react-icons/im';


const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ouh1t8z', 'template_poxvsmu', form.current, '9yIoQi660VaeP2aIP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center pt-36 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 '
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=' lg:pt-32 px-4;'
            
          >
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12 ml-20 text-xl '>I would love to get suggestions from you.</p>
            {/* form */}
            <h1 className='ml-16 text-2xl'>If you want to text me  just text me on </h1>
            <h1 className='ml-10 mt-5 text-xl font-black'>My Gmail: youssefabdelnaby12123@gmail.com </h1>



              <ul className='flex gap-x-4 mt-5 ml-48'>

        <li>
          <a href='https://www.facebook.com/youssef.emad.33' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        
        <li>
          <a href='https://www.instagram.com/youssef_3mad_7/' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='https://github.com/youssefemad7' target='_blank'>
            <ImGithub />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/youssef-emad-2a69a5266/' target='_blank'>
            <ImLinkedin />
          </a>
        </li>
       
      </ul>
      
         
          </div>

        
        </div>

      </div>

    </motion.section>
  );
};

export default Contact;
