import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cards, companyData } from "./data";

import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import TAILWIND from "./assets/tailwind.png";
import NODEJS from "./assets/nodejs.png";
import JAVASCRIPT from "./assets/javascript.png";
import MONGO from "./assets/mongo.png";
import PHP from "./assets/php.png";
import REACTJS from "./assets/reactjs.png";
import SQL from "./assets/sql.png";
import JAVA from "./assets/java.png";
import SPRINGBOOT from "./assets/springboot.png";
import { useScreenSize } from "./useScreen";

// registering plugins for gsap
gsap.registerPlugin(ScrollTrigger);

const fullstack = "Fullstack";
// const developer = "Developer"

function App() {
  const mainContainer = useRef(null);
  const wrapper = useRef();
 const screenType=useScreenSize();
console.log(screenType)
  // for scroll trigger of works section
  useLayoutEffect(() => {
    const getScrollAmount = () => {
      const scrollElemWidth = scrollElem.scrollWidth;
      let amountToScroll = scrollElemWidth - window.innerWidth;
      return -amountToScroll;
    };
    const scrollElem = mainContainer.current;
    if (screenType !=="MOBILE" ) {

      gsap.to(wrapper.current, {
        x: getScrollAmount,
        scrollTrigger: {
          trigger: scrollElem,
          start: "top -10%",
          end: () => `+=${getScrollAmount() * -1}`,
          invalidateOnRefresh: true,

          pin: true,
          scrub: 1,
        },
      });
}
  }, []);

  useLayoutEffect(() => {
    const elems = gsap.utils.toArray(".movewithmouse");


    elems.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;

        const xVal = (clientX / window.innerWidth) * 40;
        const yVal = (clientY / window.innerHeight) * 40;

        item.style.left = xVal + "px";
        item.style.top = yVal + "px";
      });
    });
  });

  useLayoutEffect(() => {
    const words = gsap.utils.toArray(".aboutmeChild");

    words.forEach((item, i) => {
      if (i === 0) {
        gsap.fromTo(
          item,
          { x: "-100%", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".aboutMeContainer",
              start: "top 100%",
              end: "top 20%",

              scrub: true,
            },
          }
        );
      }
    });
  });

  const modify = (word) => {
    return word.split("").map((char, i) => {
      return (
        <span key={i} className='letter'>
          {char}
        </span>
      );
    });
  };

  return (
    <React.Fragment>
      <main className='font-primaryFont bg-mainBg text-fontPrimary  overflow-hidde relative'>
        <div className=' m0ax-w-[1300px] mx-auto '>
          {/*

#######################################################################################################################################

                          MAIN HEADER SECTION

#######################################################################################################################################


        */}

          <header className='min-h-screen relative w-full'>
            {/* main top nav bar  */}
            <nav className='flex justify-between items-center pt-0'>
              <div className='  logo sticky top-10 left-0'>
                <div className='  logoChild '>
                  <div className='relative'>
                    {"Mansab*Mir".split("").map((char, i) => {
                      return (
                        <span
                          key={i}
                          className='character'
                          style={{
                            display: "",
                            position: "absolute",
                            left: "100%",
                            transform: `rotate(${i * 35}deg)`,
                            transformOrigin: "0px 70px",
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 text-sm items-center'>
                <p>Delhi, India</p>
                <div className='py-1 px-8 border border-white rounded-3xl relative flex items-center gap-3'>
                  <span className='h-3 w-3 rounded-full bg-[#2bee5b] circle absolute left-2 '></span>{" "}
                  <p>open to work</p>
                </div>
              </div>
            </nav>

            {/* Main header introduction section */}

            <section className='grid place-content-start sm:place-content-evenly  h-[80vh] w-full'>
              <div className='text-[60px] sm:text-[120px]   font-bold  letterParent w-full'>
                <h1> I'm Mansab </h1>
                <h1> Creative </h1>

                <h1 className='letterParent gradientParent w-full z-10'>
                  {" "}
                  {modify(fullstack)} {modify("Developer")}{" "}
                </h1>
              </div>
            </section>
            <div className='flex justify-center'>
              <div className='flex fixed justify-center blurEffect bg-black bg-opacity-30 border border-lime-300    bottom-2  px-1 sm:px-4  py-2 sm:py-4 rounded-full  w-min z-30'>
                <a
                  href='#work'
                  className='hover:bg-hoverYellow px-1 sm:px-4 py-1 rounded-3xl transition-all duration-500 hover:text-black font-semibold'
                >
                  Works
                </a>

                <a
                  href='#experience'
                  className='hover:bg-hoverYellow px-4 py-1 rounded-3xl transition-all duration-500 hover:text-black font-semibold'
                >
                  Experience
                </a>
                <a
                  href='#skills'
                  className='hover:bg-hoverYellow px-4 py-1 rounded-3xl transition-all duration-500 hover:text-black font-semibold'
                >
                  Skills
                </a>
                <a
                  href='#contact'
                  className='hover:bg-hoverYellow px-4 py-1 rounded-3xl transition-all duration-500 hover:text-black font-semibold'
                >
                  Contact
                </a>
                {/* <a
                  href=''
                  className='hover:bg-hoverYellow px-4 py-1 rounded-3xl transition-all duration-500 hover:text-black font-semibold'
                >
                  Resume
                </a> */}
              </div>
            </div>
          </header>

          {/*

#######################################################################################################################################

                               SELECTED WORK SECTION STARTING HERE

#######################################################################################################################################


        */}

          <div
            ref={mainContainer}
            id='work'
            className='sliderContainer bg-[0b0b0e] mx-10 sm:mx-2'
          >
            <div className='min-h-screen  sm:w-[100px] grid my-auto'>
              <div
                className='flex flex-col sm:flex-row gap-4 my-auto w-full'
                ref={wrapper}
              >
                <div className='sm:min-w-[400px]  space-y-4   sm:mr-40'>
                  <h1 className='text-[70px] text-wrap sm:text-[80px] font-medium leading-tight'>
                    {" "}
                    Selected <br /> Works
                  </h1>
                  <p className='text-sm sm:text-lg tracking-widest text-wrap text-fontPara text-justify space-y-8 hover:text-white transition-all duration-300 ease-in'>
                    Throughout my career, I've spearheaded the development of
                    impactful web projects, leveraging my expertise in
                    full-stack development to deliver exceptional results.
                  </p>
                  <button className='hover:bg-hoverYellow border-hoverYellow text-white border-2 px-4 py-2 rounded-3xl transition-all duration-500 hover:text-black text-xl font-medium'>
                    Contact
                  </button>
                </div>
                {cards.map((item, i) => {
                  const { title, description, link, imagePath, styleName } =
                    item;
                  return (
                    <div key={i} className={`${styleName} mr-40`}>
                      <div className='flex justify-between items-center my-auto'>
                        <div>
                          <h1 className='font-semibold text-[#0e0e0e] text-3xl'>
                            {title}
                          </h1>
                          <p>{description}</p>
                        </div>
                        <div>
                          <button className='px-2 text-xl py-1 border-2 border-fontPara text-fontPara transition-all duration-500 hover:bg-fontPara hover:text-white font-semibold rounded-md'>
                            Visit
                          </button>
                        </div>
                      </div>
                      <div className=' rounded-xl mt-auto mr-auto '>
                        <a href={link} target='_blank'>
                          <img src={imagePath} alt='' className=' h-[100%]' />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/*

#######################################################################################################################################

                            MY SKILLS SECTION

#######################################################################################################################################


        */}

          <div id='skills' className='min-h-screen mb-20 mx-10 sm:mx-3'>
            <div>
              <div className='text-[70px] text-wrap sm:text-[80px] font-medium leading-tight'>
                {" "}
                <h1 className=' opacity-70'>My</h1>
                <h1>Skillset</h1>
              </div>
              <div className='grid  '>
                <div className='flex justify-start sm:justify-around '>
                  <img
                    src={HTML}
                    alt=''
                    className='h-28 sm:h-40 relative aspect-square   movewithmouse transition-all duration-300'
                  />
                  <img
                    src={CSS}
                    alt=''
                    className='h-28 sm:h-40 aspect-square  relative movewithmouse'
                  />
                  <img
                    src={REACTJS}
                    alt=''
                    className='h-28 sm:h-40 aspect-square rounded-full relative movewithmouse'
                  />
                </div>
                <div className='flex  justify-between flex-wrap sm:justify-between '>
                  <img
                    src={JAVASCRIPT}
                    alt=''
                    className='h-28 sm:h-40 rounded-full aspect-square relative movewithmouse'
                  />
                  <img
                    src={NODEJS}
                    alt=''
                    className='h-28 sm:h-40 rounded-full aspect-square relative movewithmouse'
                  />
                  <img
                    src={PHP}
                    alt=''
                    className='h-28 sm:h-40 aspect-square  relative movewithmouse'
                  />
                  <img
                    src={SQL}
                    alt=''
                    className='h-28 sm:h-40 aspect-square relative movewithmouse'
                  />
                  <img
                    src={TAILWIND}
                    alt=''
                    className='h-28 sm:h-40 aspect-square rounded-full relative movewithmouse'
                  />
                </div>
                <div className='flex justify-around '>
                  <img
                    src={JAVA}
                    alt=''
                    className='h-28 sm:h-40 aspect-square relative movewithmouse'
                  />
                  <img
                    src={MONGO}
                    alt=''
                    className='h-28 sm:h-40 aspect-square relative movewithmouse'
                  />
                  <img
                    src={SPRINGBOOT}
                    alt=''
                    className='h-28 sm:h-40 aspect-square rounded-full relative movewithmouse'
                  />
                </div>
              </div>
            </div>
          </div>

          {/*

#######################################################################################################################################

                       EXPERIENCE HISTORY

#######################################################################################################################################


        */}

          <div id='experience' className='min-h-screen'>
            <div className='text-[70px] ml-3 sm:text-[80px] font-medium leading-tight my-40 '>
              {" "}
              <h1 className=' opacity-70'>Experience</h1>
              <h1>History</h1>
            </div>

            {/*  experience cards */}
            {companyData.map((item, i) => {
              const { roleTitle, duration, jobMode, companyname } = item;
              return (
                <div
                  className='flex  justify-between pb-10 ml-3 mb-10 border-b border-b-fontPara'
                  key={i}
                >
                  <div>
                    <h1 className='text-3xl md:text-5xl opacity-80 mb-8'>
                      {roleTitle}
                    </h1>
                    <p>{companyname}</p>
                  </div>
                  <div className='text-fontPara text-base md:text-lg'>
                    <p>{duration}</p>
                    <p>{jobMode}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/*

#######################################################################################################################################

                       SOME MORE ABOUT ME

#######################################################################################################################################


        */}

          <div className='min-h-screen w-full px-4 sm:mx-0'>
            <h4 className=' max-w-[100%] sm:max-w-[30%] text-justify text-lg   md:text-2xl font-extralight'>
              I've worked in UI design and front-end development, so I can
              understand designs well and builds effective communication between
              team members.
            </h4>
            <div className='uppercase aboutMeContainer grid place-content-center text-[60px] md:text-[120px] italic font-bold'>
              {["Creative", "Fullstack", "Developer"].map((item, i) => {
                return (
                  <h1 key={i} className='aboutmeChild'>
                    {item}
                  </h1>
                );
              })}
            </div>
            <h4 className='ml-auto max-w-[100%] sm:max-w-[30%] text-justify text-lg   md:text-2xl  text-2xl font-extralight'>
              Currently, I live in Seattle. In my personal life, I love to
              travel with my backpack, watch documentaries about geography, and
              explore new traditional music.
            </h4>
          </div>

          {/*

#######################################################################################################################################

           CONTACT ME SECTION

#######################################################################################################################################



        */}
          <div
            className='min-h-screen grid grid-cols-1 text-center md:text-left md:grid-cols-2 place-content-center w-full'
            id='contact'
          >
            <div className='text-[80px] md:ml-20  font-medium leading-tight w-full '>
              {" "}
              <h1 className=' opacity-70'>Get in </h1>
              <h1>Touch</h1>
              <a
                href='mailto:mansabmirsde@gmail.com'
                className='text-lg hover:text-hoverYellow transition-all duration-300 hover:underline'
              >
                mansabmirsde@gmail.com
              </a>
            </div>
            <div className='w-full text-[80px] md:text-[120px] '>
              <h1 className='hover:text-hoverYellow hover:underline transition-all duration-500 cursor-pointer'>
                <a href='https://github.com/themansabmir/' target='_blank'>
                  GITHUB
                </a>
              </h1>
              <h1 className='hover:text-hoverYellow hover:underline transition-all duration-500 cursor-pointer'>
                <a
                  href='https://www.linkedin.com/in/themansabmir/'
                  target='_blank'
                >
                  LINKEDIN
                </a>
              </h1>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
