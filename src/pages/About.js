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
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none ">
            <img
              src={YoussefImg}
              alt=""
              className="img1"
              style={{ height: "600px" }}
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-md">
              I am a Full Stack JavaScript Developer with 1+ year of experience
              building scalable, high-performance web applications. I develop
              responsive frontend interfaces using React and Next.js, and design
              secure backend APIs with Node.js, Express, and MongoDB. I focus on
              clean architecture, performance optimization, and delivering
              production-ready solutions that solve real-world problems.
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>

        <section className="w-full bg-neutral-50 py-28 relative overflow-hidden">
          {/* Soft background shapes */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
          <div className="absolute top-60 -left-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

          {/* Content container */}
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Section Title */}
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Skills & Technologies
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Technologies I use to build scalable, end-to-end web
                applications.
              </p>
            </div>

            <div className="space-y-24">
              {/* Frontend */}
              <div>
                <div className="relative flex items-center justify-center mb-12">
                  <span className="absolute inset-x-0 h-px bg-gray-300" />
                  <h3 className="relative px-8 text-lg font-semibold text-gray-900 bg-neutral-50">
                    Frontend
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                  {[
                    "React.js",
                    "Next.js",
                    "JavaScript",
                    "TypeScript",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Bootstrap",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-7 py-3 text-sm rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="relative flex items-center justify-center mb-12">
                  <span className="absolute inset-x-0 h-px bg-gray-300" />
                  <h3 className="relative px-8 text-lg font-semibold text-gray-900 bg-neutral-50">
                    Backend
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                  {[
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "GraphQL",
                    "JWT Authentication",
                    "MVC Architecture",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-7 py-3 text-sm rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <div className="relative flex items-center justify-center mb-12">
                  <span className="absolute inset-x-0 h-px bg-gray-300" />
                  <h3 className="relative px-8 text-lg font-semibold text-gray-900 bg-neutral-50">
                    Databases
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                  {[
                    "MongoDB",
                    "Mongoose",
                    "MySQL",
                    "Sequelize",
                    "Firebase",
                    "Supabase",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-7 py-3 text-sm rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* State & APIs */}
              <div>
                <div className="relative flex items-center justify-center mb-12">
                  <span className="absolute inset-x-0 h-px bg-gray-300" />
                  <h3 className="relative px-8 text-lg font-semibold text-gray-900 bg-neutral-50">
                    State & Data Management
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                  {["Redux Toolkit", "React Query", "Axios"].map((skill) => (
                    <span
                      key={skill}
                      className="px-7 py-3 text-sm rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="relative flex items-center justify-center mb-12">
                  <span className="absolute inset-x-0 h-px bg-gray-300" />
                  <h3 className="relative px-8 text-lg font-semibold text-gray-900 bg-neutral-50">
                    Tools & Deployment
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-5">
                  {["Git", "GitHub", "Vercel", "Netlify", "Postman"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-7 py-3 text-sm rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default About;
