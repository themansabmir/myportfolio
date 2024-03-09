import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  cards,
  companyData,
  servicesCard,
  skillsString,
  workCycle,
} from "./data";
import lottie from "lottie-web";
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
import jsonFile from "./assets/lottie.json";
import { WorkCard } from "./WorkCard";
import Logo from "./assets/logo.svg";
import { ServiceCard } from "./ServiceCard";
// registering plugins for gsap
gsap.registerPlugin(ScrollTrigger);

const fullstack = "Fullstack";
// const developer = "Developer"

function App() {
  const mainContainer = useRef(null);
  const wrapper = useRef();
  const lottieContainer = useRef();
  const screenType = useScreenSize();
  console.log(screenType);
  // for scroll trigger of works section
  useLayoutEffect(() => {
    const getScrollAmount = () => {
      const scrollElemWidth = scrollElem.scrollWidth;
      let amountToScroll = scrollElemWidth - window.innerWidth;
      return -amountToScroll;
    };
    const scrollElem = mainContainer.current;
    if (screenType !== "MOBILE") {
      gsap.to(wrapper.current, {
        x: getScrollAmount,
        scrollTrigger: {
          trigger: scrollElem,
          start: "top 0%",
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

  useLayoutEffect(() => {
    lottie.loadAnimation({
      animationData: jsonFile,
      autoplay: true,
      container: lottieContainer.current,
      loop: true,
      renderer: "svg",
    });
  }, []);

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
      <main className='font-primaryFont bg-mainB text-fontPrimary  overflow-x-hide relative'>
        <div className='   '>
          {/*

#######################################################################################################################################

                          MAIN HEADER SECTION

#######################################################################################################################################


        */}

          <header className='min-h-screen relative  w-full bg-[#ffffff] text-black'>
            {/* main top nav bar  */}
            <nav className='flex justify-between items-center pt-0 mx-2 sm:mx-10 mt-8 font-bold'>
              <div className=' text-[2rem] sm:text-[3rem] sticky top-10 left-0'>
                <h1 className='text-black flex relative'>
                  <svg
                    width={screenType !== "MOBILE" ? "200" : "100"}
                    height='80'
                    viewBox='0 0 50 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.92041 9.00071V2.45526H1.892V3.47798H1.97723C2.11359 3.12855 2.33376 2.85724 2.63774 2.66406C2.94172 2.46804 3.30677 2.37003 3.73291 2.37003C4.16473 2.37003 4.5241 2.46804 4.81104 2.66406C5.10081 2.85724 5.32666 3.12855 5.48859 3.47798H5.55677C5.72439 3.13991 5.97581 2.87145 6.31104 2.67259C6.64626 2.47088 7.04825 2.37003 7.517 2.37003C8.10223 2.37003 8.58092 2.55327 8.95308 2.91974C9.32524 3.28338 9.51132 3.85014 9.51132 4.62003V9.00071H8.50564V4.62003C8.50564 4.13707 8.37354 3.7919 8.10933 3.58452C7.84513 3.37713 7.53405 3.27344 7.17609 3.27344C6.71587 3.27344 6.35933 3.41264 6.10649 3.69105C5.85365 3.96662 5.72723 4.31605 5.72723 4.73935V9.00071H4.7045V4.51776C4.7045 4.1456 4.58376 3.84588 4.34229 3.61861C4.10081 3.38849 3.78973 3.27344 3.40905 3.27344C3.14768 3.27344 2.90336 3.34304 2.67609 3.48224C2.45166 3.62145 2.26984 3.81463 2.13064 4.06179C1.99427 4.30611 1.92609 4.58878 1.92609 4.9098V9.00071H0.92041Z'
                      fill='#080007'
                    />
                    <path
                      d='M13.2762 9.15412C12.8615 9.15412 12.485 9.07599 12.147 8.91974C11.8089 8.76065 11.5404 8.53196 11.3416 8.23366C11.1427 7.93253 11.0433 7.56889 11.0433 7.14276C11.0433 6.76776 11.1171 6.46378 11.2649 6.23082C11.4126 5.99503 11.61 5.81037 11.8572 5.67685C12.1044 5.54332 12.3771 5.44389 12.6754 5.37855C12.9765 5.31037 13.2791 5.25639 13.5831 5.21662C13.9808 5.16548 14.3032 5.12713 14.5504 5.10156C14.8004 5.07315 14.9822 5.02628 15.0958 4.96094C15.2123 4.8956 15.2706 4.78196 15.2706 4.62003V4.58594C15.2706 4.16548 15.1555 3.83878 14.9254 3.60582C14.6981 3.37287 14.3529 3.25639 13.8899 3.25639C13.4098 3.25639 13.0333 3.36151 12.7606 3.57173C12.4879 3.78196 12.2961 4.00639 12.1853 4.24503L11.2308 3.90412C11.4012 3.50639 11.6285 3.19673 11.9126 2.97514C12.1995 2.75071 12.512 2.59446 12.8501 2.50639C13.191 2.41548 13.5262 2.37003 13.8558 2.37003C14.066 2.37003 14.3075 2.3956 14.5802 2.44673C14.8558 2.49503 15.1214 2.59588 15.3771 2.74929C15.6356 2.9027 15.8501 3.13423 16.0206 3.44389C16.191 3.75355 16.2762 4.16832 16.2762 4.68821V9.00071H15.2706V8.11435H15.2194C15.1512 8.25639 15.0376 8.40838 14.8785 8.57031C14.7194 8.73224 14.5078 8.87003 14.2436 8.98367C13.9794 9.0973 13.6569 9.15412 13.2762 9.15412ZM13.4296 8.25071C13.8274 8.25071 14.1626 8.17259 14.4353 8.01634C14.7109 7.86009 14.9183 7.65838 15.0575 7.41122C15.1995 7.16406 15.2706 6.90412 15.2706 6.63139V5.71094C15.2279 5.76207 15.1342 5.80895 14.9893 5.85156C14.8473 5.89134 14.6825 5.92685 14.495 5.9581C14.3103 5.98651 14.1299 6.01207 13.9538 6.0348C13.7805 6.05469 13.6399 6.07173 13.5319 6.08594C13.2706 6.12003 13.0262 6.17543 12.799 6.25213C12.5745 6.32599 12.3927 6.43821 12.2535 6.58878C12.1171 6.73651 12.049 6.93821 12.049 7.19389C12.049 7.54332 12.1782 7.80753 12.4367 7.98651C12.6981 8.16264 13.0291 8.25071 13.4296 8.25071Z'
                      fill='#080007'
                    />
                    <path
                      d='M19.1175 5.06321V9.00071H18.1118V2.45526H19.0834V3.47798H19.1686C19.322 3.1456 19.555 2.87855 19.8675 2.67685C20.18 2.4723 20.5834 2.37003 21.0777 2.37003C21.5209 2.37003 21.9087 2.46094 22.2411 2.64276C22.5735 2.82173 22.832 3.09446 23.0166 3.46094C23.2013 3.82457 23.2936 4.2848 23.2936 4.84162V9.00071H22.288V4.9098C22.288 4.3956 22.1544 3.99503 21.8874 3.7081C21.6203 3.41832 21.2539 3.27344 20.788 3.27344C20.4669 3.27344 20.18 3.34304 19.9272 3.48224C19.6772 3.62145 19.4797 3.82457 19.3348 4.09162C19.1899 4.35866 19.1175 4.68253 19.1175 5.06321Z'
                      fill='#080007'
                    />
                    <path
                      d='M29.7677 3.92116L28.8643 4.17685C28.8075 4.02628 28.7237 3.87997 28.6129 3.73793C28.5049 3.59304 28.3572 3.47372 28.1697 3.37997C27.9822 3.28622 27.7421 3.23935 27.4495 3.23935C27.049 3.23935 26.7152 3.33168 26.4481 3.51634C26.1839 3.69815 26.0518 3.92969 26.0518 4.21094C26.0518 4.46094 26.1427 4.65838 26.3245 4.80327C26.5063 4.94815 26.7904 5.06889 27.1768 5.16548L28.1484 5.40412C28.7336 5.54616 29.1697 5.76349 29.4566 6.05611C29.7436 6.34588 29.887 6.71946 29.887 7.17685C29.887 7.55185 29.7791 7.88707 29.5632 8.18253C29.3501 8.47798 29.0518 8.71094 28.6683 8.88139C28.2848 9.05185 27.8387 9.13707 27.3302 9.13707C26.6626 9.13707 26.11 8.99219 25.6725 8.70242C25.235 8.41264 24.9581 7.98935 24.8416 7.43253L25.7961 7.19389C25.887 7.54617 26.0589 7.81037 26.3117 7.98651C26.5674 8.16264 26.9012 8.25071 27.3132 8.25071C27.7819 8.25071 28.1541 8.15128 28.4296 7.95241C28.7081 7.75071 28.8473 7.50923 28.8473 7.22798C28.8473 7.00071 28.7677 6.81037 28.6086 6.65696C28.4495 6.50071 28.2052 6.38423 27.8757 6.30753L26.7848 6.05185C26.1853 5.9098 25.745 5.68963 25.4637 5.39134C25.1853 5.0902 25.0461 4.71378 25.0461 4.26207C25.0461 3.89276 25.1498 3.56605 25.3572 3.28196C25.5674 2.99787 25.8529 2.77486 26.2137 2.61293C26.5774 2.45099 26.9893 2.37003 27.4495 2.37003C28.0973 2.37003 28.6058 2.51207 28.9751 2.79616C29.3473 3.08026 29.6115 3.45526 29.7677 3.92116Z'
                      fill='#080007'
                    />
                    <path
                      d='M33.327 9.15412C32.9122 9.15412 32.5358 9.07599 32.1978 8.91974C31.8597 8.76065 31.5912 8.53196 31.3924 8.23366C31.1935 7.93253 31.0941 7.56889 31.0941 7.14276C31.0941 6.76776 31.1679 6.46378 31.3157 6.23082C31.4634 5.99503 31.6608 5.81037 31.908 5.67685C32.1551 5.54332 32.4279 5.44389 32.7262 5.37855C33.0273 5.31037 33.3299 5.25639 33.6338 5.21662C34.0316 5.16548 34.354 5.12713 34.6012 5.10156C34.8512 5.07315 35.033 5.02628 35.1466 4.96094C35.2631 4.8956 35.3213 4.78196 35.3213 4.62003V4.58594C35.3213 4.16548 35.2063 3.83878 34.9762 3.60582C34.7489 3.37287 34.4037 3.25639 33.9407 3.25639C33.4605 3.25639 33.0841 3.36151 32.8114 3.57173C32.5387 3.78196 32.3469 4.00639 32.2361 4.24503L31.2816 3.90412C31.452 3.50639 31.6793 3.19673 31.9634 2.97514C32.2503 2.75071 32.5628 2.59446 32.9009 2.50639C33.2418 2.41548 33.577 2.37003 33.9066 2.37003C34.1168 2.37003 34.3583 2.3956 34.631 2.44673C34.9066 2.49503 35.1722 2.59588 35.4279 2.74929C35.6864 2.9027 35.9009 3.13423 36.0713 3.44389C36.2418 3.75355 36.327 4.16832 36.327 4.68821V9.00071H35.3213V8.11435H35.2702C35.202 8.25639 35.0884 8.40838 34.9293 8.57031C34.7702 8.73224 34.5586 8.87003 34.2943 8.98367C34.0301 9.0973 33.7077 9.15412 33.327 9.15412ZM33.4804 8.25071C33.8782 8.25071 34.2134 8.17259 34.4861 8.01634C34.7617 7.86009 34.9691 7.65838 35.1083 7.41122C35.2503 7.16406 35.3213 6.90412 35.3213 6.63139V5.71094C35.2787 5.76207 35.185 5.80895 35.0401 5.85156C34.898 5.89134 34.7333 5.92685 34.5458 5.9581C34.3611 5.98651 34.1807 6.01207 34.0046 6.0348C33.8313 6.05469 33.6907 6.07173 33.5827 6.08594C33.3213 6.12003 33.077 6.17543 32.8497 6.25213C32.6253 6.32599 32.4435 6.43821 32.3043 6.58878C32.1679 6.73651 32.0997 6.93821 32.0997 7.19389C32.0997 7.54332 32.229 7.80753 32.4875 7.98651C32.7489 8.16264 33.0799 8.25071 33.4804 8.25071Z'
                      fill='#080007'
                    />
                    <path
                      d='M38.299 9.00071V0.273438H39.3046V3.49503H39.3899C39.4637 3.38139 39.566 3.23651 39.6967 3.06037C39.8302 2.88139 40.0206 2.7223 40.2677 2.5831C40.5177 2.44105 40.8558 2.37003 41.2819 2.37003C41.8331 2.37003 42.3188 2.50781 42.7393 2.78338C43.1598 3.05895 43.4879 3.44957 43.7237 3.95526C43.9595 4.46094 44.0774 5.05753 44.0774 5.74503C44.0774 6.43821 43.9595 7.03906 43.7237 7.54759C43.4879 8.05327 43.1612 8.44531 42.7436 8.72372C42.326 8.99929 41.8444 9.13707 41.299 9.13707C40.8785 9.13707 40.5419 9.06747 40.289 8.92827C40.0362 8.78622 39.8416 8.62571 39.7052 8.44673C39.5688 8.26492 39.4637 8.11435 39.3899 7.99503H39.2706V9.00071H38.299ZM39.2876 5.72798C39.2876 6.2223 39.36 6.65838 39.5049 7.03622C39.6498 7.41122 39.8615 7.70526 40.1399 7.91832C40.4183 8.12855 40.7592 8.23366 41.1626 8.23366C41.5831 8.23366 41.9339 8.12287 42.2152 7.90128C42.4992 7.67685 42.7123 7.37571 42.8544 6.99787C42.9992 6.61719 43.0717 6.19389 43.0717 5.72798C43.0717 5.26776 43.0007 4.85298 42.8586 4.48366C42.7194 4.11151 42.5078 3.81747 42.2237 3.60156C41.9424 3.38281 41.5887 3.27344 41.1626 3.27344C40.7535 3.27344 40.4098 3.37713 40.1313 3.58452C39.8529 3.78906 39.6427 4.07599 39.5007 4.44531C39.3586 4.81179 39.2876 5.23935 39.2876 5.72798Z'
                      fill='#080007'
                    />
                    <path
                      d='M50 7.50071C50 8.32914 49.3284 9.00071 48.5 9.00071C47.6715 9.00071 47 8.32914 47 7.50071C47 6.67228 47.6715 6.00071 48.5 6.00071C49.3284 6.00071 50 6.67228 50 7.50071Z'
                      fill='#FC4302'
                    />
                  </svg>

                  {/* mansab{" "}
                  <span className='text-[30px] text-hoverYellow'>
                    <svg
                      className='absolute'
                      width='100'
                      height='100'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='5' cy='50' r='5' fill='#ff4500' />
                    </svg>
                  </span> */}
                </h1>
                {/* <div className='  logoChild '>
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
                </div> */}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 text-sm items-center'>
                <p>Delhi, India</p>
                <div className='py-1 px-8 border border-black rounded-3xl relative flex items-center gap-3'>
                  <span className='h-3 w-3 rounded-full bg-hoverYellow  circle absolute left-2 '></span>{" "}
                  <p>open to work</p>
                </div>
              </div>
            </nav>

            {/* Main header introduction section */}

            <section className='grid place-content-start sm:place-content-evenly  h-[80vh] w-full '>
              <div className='text-[30px] mt-48 sm:mt-4  sm:text-[70px] w-10/12 mx-auto  font-bold  letterParent text-center'>
                <h1 className=''>
                  {" "}
                  From <span className='text-hoverYellow'>Code </span> to{" "}
                  <span className='text-hoverYellow'>Cloud </span>, I'm Your IT
                  Expert, Ready to Transform Your Business.{" "}
                </h1>

                <h1 className='letterParent gradientParent w-full z-10 text-[2rem] sm:text-[5rem] py-10  '>
                  {" "}
                  {modify(fullstack)} {modify("Developer")}{" "}
                </h1>
              </div>
            </section>

            {/* fixed nav links */}
            <div className='flex justify-center'>
              <div className='flex fixed justify-center blurEffect bg-black bg-opacity-10 border  text-white    bottom-2  px-1 sm:px-4  py-2 sm:py-4 rounded-full  w-min z-30'>
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

                            WORKFLOW PROCESS

#######################################################################################################################################


        */}
          <section className='min-h-screen relative bg-butterscoth sm:rounded-t-[20%] w-full pb-20'>
            <h2 className='text-center pt-20 text-hoverYellow font-semibold text-xl flex justify-center items-center'>
              <span className='rotateObj'>
                <svg
                  className='rotate'
                  width='20'
                  height='20'
                  viewBox='0 0 17 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.62533 14.4818L6.60649 15H7.125H9.375H9.89351L9.87467 14.4818L9.72169 10.2748L13.279 12.5316L13.7212 12.8121L13.981 12.3574L15.106 10.3887L15.364 9.93717L14.9027 9.69709L11.1612 7.75L14.9027 5.80291L15.364 5.56283L15.106 5.1113L13.981 3.14256L13.7212 2.6879L13.279 2.96842L9.72169 5.22523L9.87467 1.01817L9.89351 0.5H9.375H7.125H6.60649L6.62533 1.01817L6.77831 5.22523L3.22097 2.96842L2.7788 2.6879L2.519 3.14256L1.394 5.1113L1.13599 5.56283L1.59731 5.80291L5.33877 7.75L1.59731 9.69709L1.13599 9.93717L1.394 10.3887L2.519 12.3574L2.7788 12.8121L3.22098 12.5316L6.77831 10.2748L6.62533 14.4818Z'
                    fill='#FF4903'
                    stroke='#FF4903'
                  />
                </svg>
              </span>
              How does it work?
            </h2>
            <h2 className='text-black font-bold text-[40px] sm:text-[50px] mt-10 w-11/12 sm:w-6/12 mx-auto text-center'>
              Crafting Miracles in Motion, Our Dynamic Work Cycle
            </h2>
            <div className='relative'>
              <div
                ref={lottieContainer}
                className=' w-7/12 mx-auto aspect-square'
              >
                {" "}
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-4  sm:space-x-5  mx-4 sm:mx-20 place-content-center'>
              {workCycle.map((item, i) => {
                const { title, description } = item;

                return (
                  <div className=' my-5 sm:my-0 ' key={i}>
                    <WorkCard title={title} description={description} />
                  </div>
                );
              })}
            </div>
          </section>

          {/*

#######################################################################################################################################

                              BREAK DOWN OF MY SERVIVES

#######################################################################################################################################


        */}

          <section className='min-h-screen bg-creamBg pb-20'>
            <div>
              <h2 className='text-center pt-20 text-hoverYellow font-semibold text-xl flex justify-center items-center'>
                <span className='rotateObj'>
                  <svg
                    className='rotate'
                    width='20'
                    height='20'
                    viewBox='0 0 17 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.62533 14.4818L6.60649 15H7.125H9.375H9.89351L9.87467 14.4818L9.72169 10.2748L13.279 12.5316L13.7212 12.8121L13.981 12.3574L15.106 10.3887L15.364 9.93717L14.9027 9.69709L11.1612 7.75L14.9027 5.80291L15.364 5.56283L15.106 5.1113L13.981 3.14256L13.7212 2.6879L13.279 2.96842L9.72169 5.22523L9.87467 1.01817L9.89351 0.5H9.375H7.125H6.60649L6.62533 1.01817L6.77831 5.22523L3.22097 2.96842L2.7788 2.6879L2.519 3.14256L1.394 5.1113L1.13599 5.56283L1.59731 5.80291L5.33877 7.75L1.59731 9.69709L1.13599 9.93717L1.394 10.3887L2.519 12.3574L2.7788 12.8121L3.22098 12.5316L6.77831 10.2748L6.62533 14.4818Z'
                      fill='#FF4903'
                      stroke='#FF4903'
                    />
                  </svg>
                </span>
                What do i do?
              </h2>
              <h2 className='text-black font-bold text-[40px] sm:text-[50px] mt-10 w-11/12 sm:w-6/12 mx-auto text-center'>
                A Breakdown of <br /> services I provide.
              </h2>
              <p className='text-black font-medium text-[16px] sm:text-[20px] mt-10 w-11/12 sm:w-6/12 mx-auto text-center'>
                Your one spot solution for web & mobile apps,
                <br /> like many agencies, founders and startups do.
              </p>
            </div>
            <div className='flex justify-center'>
              <svg
                className='svgsprite svg-arrow-down'
                xmlns='http://www.w3.org/2000/svg'
                width='10%'
                viewBox='0 0 102 110'
                fill='black'
              >
                <path
                  fillRule='evenodd'
                  clipRule={"evenodd"}
                  d='M50.7033 62.9562C50.5986 72.6396 47.6532 78.5514 43.9298 81.7563C40.2067 84.961 35.4143 85.7182 31.0205 84.5374C26.6095 83.352 22.7232 80.2416 20.8756 75.8688C19.0518 71.5525 19.1048 65.7341 23.088 58.8925C28.1466 50.2037 38.1867 45.3297 49.0246 44.8123C50.0429 50.1115 50.7788 55.9713 50.7033 62.9562ZM19.6311 56.88C25.4208 46.9356 36.4564 41.5813 48.2007 40.8645C48.149 40.6332 48.0971 40.4029 48.0449 40.1734C47.6845 38.5888 47.3071 37.0271 46.9324 35.4768C45.7803 30.7098 44.6543 26.0506 44.1297 21.1679C43.4815 15.1346 43.7311 8.6951 45.8341 0.931319L49.6949 1.97713C47.7297 9.23231 47.5084 15.1705 48.1068 20.7406C48.6011 25.341 49.6415 29.6487 50.7759 34.3452L50.776 34.3454C51.1608 35.9387 51.5565 37.5768 51.9453 39.2863C52.059 39.7865 52.1718 40.2914 52.283 40.8015C57.7823 40.9653 63.3216 42.1295 68.4471 44.2989C77.2685 48.0325 85.0304 54.7791 89.4827 64.6819C93.5588 73.7479 94.7917 85.3017 91.7254 99.3537C92.0394 99.1703 92.3591 99.0031 92.6832 98.8513C95.7831 97.3996 99.0891 97.4474 101.237 97.9321L100.356 101.834C98.8757 101.5 96.5082 101.477 94.3796 102.474C92.366 103.417 90.3678 105.358 89.5627 109.392L85.6401 108.609C86.4459 104.571 85.3639 101.894 83.8475 100.12C82.2583 98.2603 80.0647 97.255 78.5871 96.9215L79.4676 93.0197C81.6181 93.5049 84.6355 94.8851 86.8883 97.521C87.2025 97.8886 87.4996 98.2783 87.776 98.6902C90.7497 85.2207 89.5108 74.4991 85.8344 66.3221C81.8388 57.4349 74.8812 51.3656 66.888 47.9825C62.4539 46.1058 57.7506 45.0662 53.0972 44.8225C54.0769 50.1136 54.7785 56.0189 54.703 62.9995C54.59 73.4512 51.3864 80.6157 46.5393 84.7879C41.6918 88.9604 35.4923 89.8811 29.9824 88.4003C24.4897 86.9242 19.5606 83.0336 17.191 77.4256C14.7976 71.7612 15.1255 64.619 19.6311 56.88Z'
                  fill='black'
                ></path>
              </svg>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 w-10/12 mx-auto space-y-5 '>
              {servicesCard.map((item, i) => {
                const { title, description, background_color, img } = item;

                return (
                  <div key={i} className='mr-5'>
                    <ServiceCard
                      title={title}
                      img={img}
                      description={description}
                      bgColor={background_color}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/*

#######################################################################################################################################

                               SELECTED WORK SECTION STARTING HERE

#######################################################################################################################################


        */}
          <div className='x-20 bg-[#02362d] pb-10'>
            <div
              ref={mainContainer}
              id='work'
              className=' sliderContainer bg-[#02362d] h-[100%]    sm:px-20'
            >
              <div className='min-h-screen  sm:w-[100px] grid my-auto'>
                <div
                  className='flex flex-col  sm:flex-row gap-4 my-auto w-full'
                  ref={wrapper}
                >
                  <div className='sm:min-w-[400px]  space-y-4    sm:mr-40'>
                    <h1 className='text-[70px] text-creamBg text-center sm:text-start  text-wrap sm:text-[80px] font-medium leading-tight'>
                      {" "}
                      Selected <br /> Works
                    </h1>
                    <p className='mx-2 text-sm sm:text-lg tracking-widest text-wrap text-fontPara text-justify space-y-8 hover:text-white transition-all duration-300 ease-in'>
                      Throughout my career, I've spearheaded the development of
                      impactful web projects, leveraging my expertise in
                      full-stack development to deliver exceptional results.
                    </p>
                    <button className='hover:bg-creamBg border-creamBg text-white border-2 px-4 py-2 rounded-3xl transition-all duration-500 hover:text-black text-sm sm:text-xl  ml-2  font-medium'>
                      Contact
                    </button>
                  </div>
                  {cards.map((item, i) => {
                    const { title, description, link, imagePath, styleName } =
                      item;
                    return (
                      <div key={i} className={`${styleName} sm:mr-40 mx-auto`}>
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
          </div>

          {/*

#######################################################################################################################################

                            MY SKILLS SECTION

#######################################################################################################################################


        */}

          <div id='skills' className='min-h-screen mb-20   sm:mx-3'>
            <div>
              <h2 className='text-center pt-20 text-hoverYellow font-semibold text-xl flex justify-center items-center'>
                <span className='rotateObj'>
                  <svg
                    className='rotate'
                    width='20'
                    height='20'
                    viewBox='0 0 17 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.62533 14.4818L6.60649 15H7.125H9.375H9.89351L9.87467 14.4818L9.72169 10.2748L13.279 12.5316L13.7212 12.8121L13.981 12.3574L15.106 10.3887L15.364 9.93717L14.9027 9.69709L11.1612 7.75L14.9027 5.80291L15.364 5.56283L15.106 5.1113L13.981 3.14256L13.7212 2.6879L13.279 2.96842L9.72169 5.22523L9.87467 1.01817L9.89351 0.5H9.375H7.125H6.60649L6.62533 1.01817L6.77831 5.22523L3.22097 2.96842L2.7788 2.6879L2.519 3.14256L1.394 5.1113L1.13599 5.56283L1.59731 5.80291L5.33877 7.75L1.59731 9.69709L1.13599 9.93717L1.394 10.3887L2.519 12.3574L2.7788 12.8121L3.22098 12.5316L6.77831 10.2748L6.62533 14.4818Z'
                      fill='#FF4903'
                      stroke='#FF4903'
                    />
                  </svg>
                </span>
                Worried about technologies?
              </h2>
              <h2 className='text-black font-bold text-[40px] sm:text-[40px] mt-10 w-full sm:w-6/12 mx-auto text-center'>
                Think of me as your tech genie,
                <br /> here to grant your digital wishes!
              </h2>
              <p className='text-black font-medium text-[16px] sm:text-[18px] mt-10 w-11/12 sm:w-6/12 mx-auto text-center '>
                Whether you're a bustling agency, a visionary founder, or a
                thriving startup,
                <br /> I've got the skills and expertise to bring your ideas to
                life. <br />
              </p>
              <p className='mt-10 text-black text-center font-semibold text-[16px] sm:text-[20px]'>
                Don't fret; I've got you covered. <br /> Here's a breakdown of
                what I bring to the table.
              </p>
            </div>

            <div className='relative  bottom-0 text-creamBg bg-black mt-40  text-[50px] gap-10 overflow-x-hidden'>
              <div className='moveLeft  flex  items-center h-full'>
                {skillsString.split(",").map((skill, i) => {
                  return (
                    <h1 className='flex items-center ' key={i}>
                      <span className='rotateObj mx-5'>
                        <svg
                          className='rotate'
                          width='20'
                          height='20'
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.62533 14.4818L6.60649 15H7.125H9.375H9.89351L9.87467 14.4818L9.72169 10.2748L13.279 12.5316L13.7212 12.8121L13.981 12.3574L15.106 10.3887L15.364 9.93717L14.9027 9.69709L11.1612 7.75L14.9027 5.80291L15.364 5.56283L15.106 5.1113L13.981 3.14256L13.7212 2.6879L13.279 2.96842L9.72169 5.22523L9.87467 1.01817L9.89351 0.5H9.375H7.125H6.60649L6.62533 1.01817L6.77831 5.22523L3.22097 2.96842L2.7788 2.6879L2.519 3.14256L1.394 5.1113L1.13599 5.56283L1.59731 5.80291L5.33877 7.75L1.59731 9.69709L1.13599 9.93717L1.394 10.3887L2.519 12.3574L2.7788 12.8121L3.22098 12.5316L6.77831 10.2748L6.62533 14.4818Z'
                            fill='#FF4903'
                            stroke='#FF4903'
                          />
                        </svg>
                      </span>
                      {skill}
                    </h1>
                  );
                })}
                {skillsString.split(",").map((skill, i) => {
                  return (
                    <h1 className='flex items-center ' key={i}>
                      <span className='rotateObj mx-5'>
                        <svg
                          className='rotate'
                          width='20'
                          height='20'
                          viewBox='0 0 17 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.62533 14.4818L6.60649 15H7.125H9.375H9.89351L9.87467 14.4818L9.72169 10.2748L13.279 12.5316L13.7212 12.8121L13.981 12.3574L15.106 10.3887L15.364 9.93717L14.9027 9.69709L11.1612 7.75L14.9027 5.80291L15.364 5.56283L15.106 5.1113L13.981 3.14256L13.7212 2.6879L13.279 2.96842L9.72169 5.22523L9.87467 1.01817L9.89351 0.5H9.375H7.125H6.60649L6.62533 1.01817L6.77831 5.22523L3.22097 2.96842L2.7788 2.6879L2.519 3.14256L1.394 5.1113L1.13599 5.56283L1.59731 5.80291L5.33877 7.75L1.59731 9.69709L1.13599 9.93717L1.394 10.3887L2.519 12.3574L2.7788 12.8121L3.22098 12.5316L6.77831 10.2748L6.62533 14.4818Z'
                            fill='#FF4903'
                            stroke='#FF4903'
                          />
                        </svg>
                      </span>
                      {skill}
                    </h1>
                  );
                })}
              </div>
            </div>
          </div>

          {/*

#######################################################################################################################################

                       EXPERIENCE HISTORY

#######################################################################################################################################


        */}

          <div
            id='experience'
            className='min-h-screen bg-[#020232] pt-5  pb-16 rounded-b-[15%]'
          >
            <div className='mx-aut mx-2 sm:mx-10'>
              <div className='text-[60px] sm:ml-3 sm:text-[80px] font-medium leading-tight my-40 '>
                {" "}
                <h1 className=' opacity-70'>Experience</h1>
                <h1 className='flex'>History</h1>
              </div>

              {/*  experience cards */}
              {companyData.map((item, i) => {
                const { roleTitle, duration, jobMode, companyname } = item;
                return (
                  <div
                    className='flex text-creamBg  cursor-pointer hover:scale-95 transition-all duration-500 justify-between pb-10 ml-3 mb-10 border-b border-b-fontPara'
                    key={i}
                  >
                    <div>
                      <h1 className='text-xl md:text-5xl  mb-8'>{roleTitle}</h1>
                      <p>{companyname}</p>
                    </div>
                    <div className='text-white text-sm md:text-lg font-semibold'>
                      <p>{duration}</p>
                      <p>{jobMode}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/*

#######################################################################################################################################

                       SOME MORE ABOUT ME

#######################################################################################################################################


        */}

          <div className='min-h-screen w-full px-4 bg-[#ffffff] py-20 text-black sm:mx-0'>
            <h4 className=' max-w-[100%] sm:max-w-[30%] text-justify text-lg   md:text-2xl font-medium'>
              Over the years, I've honed my skills in a variety of programming
              languages and frameworks, always striving to stay on the cutting
              edge of web development technologies. My work is driven by a keen
              eye for detail and a commitment to creating seamless,
              user-friendly experiences. Whether it's building a dynamic website
              or optimizing an app for performance
            </h4>
            <div className='uppercase aboutMeContainer grid place-content-center text-[60px] md:text-[120px] text-hoverYellow italic font-bold'>
              {["Creative", "Fullstack", "Developer"].map((item, i) => {
                return (
                  <h1 key={i} className='aboutmeChild'>
                    {item}
                  </h1>
                );
              })}
            </div>
            <h4 className='ml-auto max-w-[100%] sm:max-w-[30%] text-justify text-lg   md:text-2xl  text-2xl font-medium'>
              My journey as a developer has been marked by countless late-night
              coding sessions, debugging marathons, and those "aha" moments when
              everything falls into place. I'm passionate about crafting
              software that not only meets the needs of users but also exceeds
              their expectations, leaving a lasting impact in the digital
              landscape.
            </h4>
          </div>

          {/*

#######################################################################################################################################

           CONTACT ME SECTION

#######################################################################################################################################



        */}
          <div
            className='   text-black bg-[#eaeaea]  py-20 px-10 mx-auto   text-center md:text-left w-full'
            id='contact'
          >
            <div className='grid grid-cols-3 place-content-evenly text-center'>
              <div>
                <h1 className='text-3xl font-semibold'>Get In Touch</h1>
                <p className='text-justify text-gray-500 mt-4 font-medium'>
                  Let's connect for projects, design, advice, or maybe just to
                  say a hello.
                </p>
              </div>
              <div className=''>
                <h1 className='text-3xl font-semibold'>Say Hello!</h1>
                <div className='flex flex-col gap-4 mt-4 font-medium items-center'>
                  <a
                    href='https://www.linkedin.com/in/themansabmir/'
                    target='_blank'
                    className='text-gray-500 text-xl hover:text-hoverYellow hover:underline'
                    rel='noopener noreferrer'
                  >
                    Linkedin
                  </a>
                  <a
                    href='https://www.linkedin.com/in/themansabmir/'
                    target='_blank'
                    className='text-gray-500 text-xl hover:text-hoverYellow hover:underline'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </div>
              </div>
              <div>
                <h1 className='text-3xl font-semibold text-black'>
                  In Hurry? Drop an email
                </h1>
                <div>
                  <a
                    href='mailto:mansabmirsde@gmail.com'
                    className='text-gray-500 font-semibold mt-4 text-xl hover:text-hoverYellow hover:underline'
                  >
                    mansabmirsde@gmail.com
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
