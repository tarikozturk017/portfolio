import Head from 'next/head'
import {BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { useState } from 'react';
import Image from 'next/image';
// import Carousel from "react-elastic-carousel";
import Carousel from "nuka-carousel";
// import HoverBox from './components/HoverBox';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

// import data from "./components/data"
// import resume from "../assets/TarikOzturk-Resume.pdf"


import tarikPic from "../public/tarik-pic.png"
import projectData from "../helper/data"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [expendList, setExpendList] = useState(false);

  let data = projectData;
  
  // console.log(data[0].technologies[1]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tarik Ozturk</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' pb-36 bg-slate-100 px-10 md:px-20 lg:40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className=' text-xl font-burtons'><a href="#projects" className='scroll-smooth'>Projects</a>&emsp;|&emsp;<a href="">Blog</a></h1>
            <ul className='flex items-center'>
              <li>
                { darkMode ?
                  <BsSunFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/> :
                  <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/> 
                }
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href={'/resume/TarikOzturk-Resume.pdf'} download>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            {/* <h3 className='text-4xl py-2 md:text-5xl dark:text-white'>Hi, I am</h3> */}
            {/* <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Tarik Ozturk</h2> */}
            {/* <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Developer </h3> */}

            <h1 className="mb-2 font-mono text-4xl dark:text-white md:text-6xl">
              Hi, I&apos;m <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent font-bold dark:text-teal-400 text-teal-600 font-medium md:text-6xl ">
                  Tarik <span className="text-3xl md:text-5xl">👋</span>
                </span>
                <span
                  className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-slate-100 dark:bg-gray-900 w-full animate-type will-change`}"
                ></span>
              </span>
            </h1>

          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden my-12 md:h-84 md:w-84">
              <Image src={tarikPic} layout="fill" objectFit="cover" />
            </div>
          <p className='text-2xl mb-4 py-2 leading-8 text-center dark:text-gray-100 font-burtons'>Software Developer</p>
          <div className='text-5xl flex justify-center my-1 gap-16 text-gray-600 dark:text-gray-400'>
          <a href="https://twitter.com/tarikozturk017" target={'_blank'}><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/tarik-ozturk-28b050159/" target={'_blank'}><AiFillLinkedin /></a>
            <a href="https://github.com/tarikozturk017" target={'_blank'}><AiFillGithub /></a> 
          </div>
            <p className=' text-center text-md mt-10 py-5 leading-8 text-gray-800 md:text-xl max-w-7xl mx-auto dark:text-gray-200'>I am a developer with a passion for creating efficient solutions to complex problems. 
              My interest in solving problems developed through life science while studying for my B.S. in 
              Physiotherapy and Rehabilitation. Then I started learning programming as a hobby, which led a 
              career change. I am currently studying Computer Programming at Seneca College in Toronto. During 
              my study, I focused on data structures and algorithms, object oriented programming, database management, 
              backend and frontend web development, software analysis and design. I wish to continue working with 
              passionate teams of talented developers to create technology that benefits its users by improving their 
              daily health and everyday life.</p>
        </section>
        
        
        <section id='projects'>
          <div className='text-center'>
            <h3 className=' text-5xl mb-8 py-1 dark:text-white'>Projects</h3>
            <p className='text-2xl  py-2 leading-8 text-gray-400 font-burtons'>
              Hover over images to play demo
            </p>
          </div>
          <div>

          </div>
        </section>
        <section>
          <div className=' text-center'>
        <button 
            className=' cursor-pointer bg-gradient-to-r text-lg from-cyan-500 to-teal-500 text-white px-6 py-2 my-8 rounded-md '
            onClick={() => {setExpendList(!expendList)}}
          >{!expendList ? "Click To See Listed Style (All Projects)" : "Click To See Sliding Style"} </button>
          </div>
        {/* // <Carousel> */}
        { !expendList ?
        <Carousel wrapAround={true} slidesToShow={1} >
          <div>          
            {/* FIRST */}
            <div className="w-auto lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-gray-500 flex-1">
              {/* <HoverBox static={staticAuctionHub} playGif={auctionHub} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Consulting</h3>
              <p className="py-2 dark:text-white">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p> */}
              <ProjectDetail project={data[0]}/>
            
            </div>
            <div className="text-center shadow-lg shadow-gray-500 p-10 rounded-xl my-10   flex-1">
              
              <ProjectDetail project={data[1]}/>
            </div>
            
          </div>
            </div>
              <div>
                {/* SECOND */}
              <div className="lg:flex gap-10">
                <div className="text-center p-10 rounded-xl my-10 shadow-lg shadow-gray-500 flex-1">
                <ProjectDetail project={data[2]}/>
                
              </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-gray-500 flex-1">
            <ProjectDetail project={data[3]}/>
              
            </div>
          </div>
              </div>
               {/* THIRD */}
               <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-gray-500 flex-1">
              <ProjectDetail project={data[4]}/>
              
            </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  shadow-gray-500 flex-1">
              <ProjectDetail project={data[5]}/>
              
            </div>
            
          </div>
              
              {/* FOURTH */}
              <div>
               <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  shadow-gray-500 flex-1">
            <ProjectDetail project={data[6]}/>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-gray-500 flex-1">
            <ProjectDetail project={data[7]}/>
            
            </div>
          </div>
              </div>

              
          {/* FIFTH */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-gray-500 flex-1">
            <ProjectDetail project={data[8]}/>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 shadow-gray-500 flex-1">
              <ProjectDetail project={data[9]}/>
            </div>
            
          </div>
          </Carousel>




          : <Projects />} 
        </section>
        
        <section>
        <div className=' text-center'>
           
          
          {/* {expendList && <Projects />} */}
          </div>
        </section>
      </main>
      {/* <SendForm /> */}
      <Footer />
    </div>
  );
}