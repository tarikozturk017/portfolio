import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image';
import Carousel from "react-elastic-carousel";
import HoverBox from './components/HoverBox';

// import images
import tarikPic from "../public/tarik-pic.png"
import reasype from "../public/reasype.gif"
import staticReasype from "../public/staticReasype.jpg"
import planetBlue from "../public/planetBlue.png"
import planetBlueGif from "../public/planetblue.gif"
import speedTyping from "../public/speedTyping.png"
import speedTypingGif from "../public/speedtyping.gif"
import memeGenerator from "../public/memeGenerator.png"
import memeGeneratorGif from "../public/meme-generator.gif"
import trivia from "../public/trivia.png"
import triviaGif from "../public/trivia.gif"
import pomodoro from "../public/pomodoro.png"
import pomodoroGif from "../public/pomodoro.gif"
import tenzies from "../public/tenzies.png"
import tenziesGif from "../public/tenzies.gif"
import calculator from "../public/calculator.png"
import calculatorGif from "../public/calculator.gif"
import quoteGenerator from "../public/quote-generator.png"
import quoteGeneratorGif from "../public/quote-generator.gif"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarik Ozturk Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>Tarik Ozturk</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Tarik Ozturk</h2>
            <h3 className='text-2xl py-2'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Hi, I am a developer with a passion for creating efficient solutions to complex problems. 
              My interest in solving problems developed through life science while studying for my B.S. in 
              Physiotherapy and Rehabilitation. Then I started learning programming as a hobby, which led a 
              career change. I am currently studying Computer Programming at Seneca College in Toronto. During 
              my study, I focused on data structures and algorithms, object oriented programming, database management, 
              backend and frontend web development, software analysis and design. I wish to continue working with 
              passionate teams of talented developers to create technology that benefits its users by improving their 
              daily health and everyday life.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-84 md:w-84">
              <Image src={tarikPic} layout="fill" objectFit="cover" />
            </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Hover over images to play animated demo
            </p>
          </div>
          <div>
            
          

          </div>
        </section>


        <section>
        <Carousel>
          <div>
            {/* FIRST */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={tarikPic} width={100} height={100} /> */}
              <HoverBox static={staticReasype} playGif={reasype} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Reasype
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <HoverBox static={planetBlue} playGif={planetBlueGif} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <HoverBox static={speedTyping} playGif={speedTypingGif} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            
            </div>
          </div>
            </div>
              <div>
                {/* SECOND */}
              <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={tarikPic} width={100} height={100} /> */}
              <HoverBox static={memeGenerator} playGif={memeGeneratorGif} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Reasype
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <HoverBox static={trivia} playGif={triviaGif} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <HoverBox static={pomodoro} playGif={pomodoroGif} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            
            </div>
          </div>
              </div>
              <div>
               {/* THIRD */}
               <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={tarikPic} width={100} height={100} /> */}
              <HoverBox static={tenzies} playGif={tenziesGif} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Reasype
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <HoverBox static={calculator} playGif={calculatorGif} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              
              
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <HoverBox static={quoteGenerator} playGif={quoteGeneratorGif} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            
            </div>
          </div>
              </div>
              <div>
              <Image src={tarikPic}/>
                  <p className="legend">Image 4</p>
              </div>
          </Carousel>
        </section>
      </main>
    </div>
  );
}