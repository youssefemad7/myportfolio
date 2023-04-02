import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
 
  ImInstagram,
  ImGithub,
  ImLinkedin,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
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
  );
};

export default Socials;
