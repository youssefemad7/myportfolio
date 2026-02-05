// import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import Image5 from "../img/portfolio/5.png";
import Image6 from "../img/portfolio/6.png";
import Image7 from "../img/portfolio/7.png";
import Image8 from "../img/portfolio/8.png";
import Image9 from "../img/portfolio/9.png";
import Image10 from "../img/portfolio/10.png";
import Image11 from "../img/portfolio/11.png";
import Image12 from "../img/portfolio/12.png";
import Image13 from "../img/portfolio/13.png";
import Image14 from "../img/portfolio/14.png";
import Image15 from "../img/portfolio/15.png";

// CSS
import "./App.css";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  return (
    <div className="container mx-auto h-full relative ">
      <div className="flex flex-col row lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 ">
        {/* image grid */}
        <div // onMouseEnter={mouseEnterHandler}
          // onMouseLeave={mouseLeaveHandler}
          className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2  xs:grid-cols-1 gap-8  port 	"
        >
          {/* image */}

          <div className="con max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden   ">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image1}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/firstone/tree/main">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://firstone-git-main-youssefemad7.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>E-Commerce Website (UI Only)</strong> – A responsive
                  e-commerce UI project designed to practice layout structuring,
                  product grids, and visual hierarchy using pure HTML and CSS.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  HTML5, CSS3, Media Queries
                </p>
              </div>
            </div>
          </div>

          <div className="con max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden ">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image2}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/kudzoka">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://kudzoka-git-main-youssefemad7.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>Responsive Landing Page</strong> – A fully responsive
                  landing page built using pure HTML and CSS, with media queries
                  to ensure proper layout and usability across different screen
                  sizes.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  HTML5, CSS3, Media Queries
                </p>
              </div>
            </div>
          </div>
          <div className="con max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image3}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/watces">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://watces-git-main-youssefemad7.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>TimeZone – Watches Landing Page</strong> – A
                  responsive product landing page built to practice layout
                  design, component structure, and clean UI using Bootstrap.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  HTML5, CSS3, Bootstrap
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image4}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/5amsat">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://5amsat-five.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>5amsat Website UI Clone</strong> – A frontend practice
                  project aimed at replicating a real-world platform layout with
                  attention to spacing, grid systems, and responsive behavior
                  across screen sizes.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  HTML5, CSS3, Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image5}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/bootstrap">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://bootstrap-12123-7ewqmsmxf-youssefemad7.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>Bondi</strong> – A responsive and visually polished
                  landing page built to practice layout composition,
                  mobile-first design, and reusable Bootstrap components.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  HTML5, CSS3, Bootstrap
                </p>
              </div>
            </div>
          </div>

          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image6}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/jspure">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://jspure-lenx.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>Special Design</strong> – A dynamic landing page
                  project focused on DOM manipulation, event handling, and
                  interactive UI behavior using vanilla JavaScript.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  JavaScript (ES6+), HTML5, CSS3, Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image7}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/forkify">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://forkify-six-brown.vercel.app/#664c8f193e7aa067e94e8906">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>Forkify – Recipe Management Application</strong> – A
                  modular JavaScript application built without frontend
                  frameworks, focusing on MVC architecture, state management,
                  and asynchronous data fetching for recipe search and
                  bookmarking functionality.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  JavaScript (ES6+), Parcel, Sass
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image8}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/port">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://port-liard-beta.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>Portfolio Website Template</strong> – A responsive
                  frontend project focused on building reusable UI components,
                  section-based layouts, and client-side routing for
                  portfolio-style websites.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  React.js, React Router, Material UI, Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image9}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/Wolrd-Wise">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://wolrd-wise.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.7rem] mt-2">
                  <strong>WorldWise – Travel Tracking Application</strong> – An
                  interactive travel tracking application featuring map-based
                  city selection, user authentication, and persistent travel
                  data, designed to help users track and organize their trips
                  visually.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  React.js, React Router, Supabase, Leaflet
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image10}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/Fast-React-Pizza">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://fast-react-pizza-one-rho.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.7rem] mt-2">
                  <strong>
                    Fast React Pizza – Restaurant Ordering Dashboard
                  </strong>{" "}
                  – A single-page restaurant ordering application enabling users
                  to browse pizza menus, manage cart state, adjust quantities,
                  and complete orders with predictable state management.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  React.js, Redux Toolkit, React Router, Tailwind CSS
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image11}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/The-Wild-Oasis">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://the-wild-oasis12123.netlify.app/login">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>The Wild Oasis (React)</strong> – A responsive hotel
                  booking and management dashboard built to manage reservations
                  and user data with role-based authentication.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  React.js, Supabase, React Query
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image12}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/Facebook-Clone">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://facbook-clone12123.netlify.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>

                <p className="text-[0.7rem] mt-2">
                  <strong>Social Media Platform (Facebook Clone)</strong> – A
                  social media web application that allows users to create
                  accounts, publish posts, react and comment on content, send
                  and manage friend requests, and update personal profiles with
                  real-time interactions.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  React.js, React Query, Supabase
                </p>
              </div>
            </div>
          </div>

          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image13}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/The-Wild-Oasis-Next">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://the-wild-oasis-website.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>The Wild Oasis (Next.js)</strong> – A hotel booking
                  and management dashboard for handling reservations, guests,
                  and room availability with secure authentication and efficient
                  data fetching.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  Next.js, Supabase, React Query
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image14}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/E-commerce-Next">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://ecommerce-red-beta.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2 ">
                  <strong>E-Commerce</strong> Platform Full-stack e-commerce app
                  with authentication, payments, and admin dashboard.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>Next.js, React
                  Query, Firebase, Tailwind
                </p>
              </div>
            </div>
          </div>
          <div className=" max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden con">
            <img
              className="object-cover h-full lg:h-[220px]  image"
              src={Image15}
              alt=""
            />
            <div class="overlay">
              <div class="text">
                <a href="https://github.com/youssefemad7/Quick.ai">
                  <FontAwesomeIcon icon={faGithub} className="iconport" />
                </a>
                <a href="https://quick-ai-lac-two-26.vercel.app/">
                  <FontAwesomeIcon icon={faLink} className="iconport" />
                </a>
                <p className="text-[0.8rem] mt-2">
                  <strong>AI SaaS Platform</strong> – A scalable SaaS web
                  application offering AI-powered tools such as CV review and
                  image editing, with secure authentication and optimized data
                  fetching.
                  <br />
                  <strong className="text-[1rem]">Tech: </strong>
                  Next.js, NextAuth, React Query
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
