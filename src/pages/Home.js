// import images
import YoussefImg from "../img/home/youssef.jpg";

// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className=" pt-36 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 text-[2rem]">
              Full Stack Developer (React | Next.js | Node.js)
            </h1>
            <p className="text-[26px] lg:text-[24px] font-primary lg:mb-12">
              <br />
              Building scalable web applications with modern frontend
              <br />
              technologies and secure, production-ready backend systems
            </p>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Cairo, Egypt
            </p>
            <Link to={"/Portfolio"} className="btn mb-[30px]">
              View Projects
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none ">
            <img src={YoussefImg} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
