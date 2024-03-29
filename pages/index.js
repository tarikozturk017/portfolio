import Head from "next/head";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
// import Carousel from "react-elastic-carousel";
import Carousel from "nuka-carousel";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import CertAwards from "./components/CertAwards";
import Footer from "./components/Footer";

import tarikPic from "../public/tarik-pic.png";
import projectData from "../helper/data";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [expendList, setExpendList] = useState(false);
  const [showCert, setShowCert] = useState(false);

  let data = projectData;

  var carouselContent = data.map((project, index) => {
    // console.log(project);
    if (index < 10) {
      return (
        <div key={index} className="lg:flex gap-10 mx-3">
          <div className="text-center shadow-lg p-8 max-w-4xl rounded-xl my-10 mx-auto shadow-gray-500 flex-1">
            <ProjectDetail project={project} />
          </div>
        </div>
      );
    }
  });

  return (
    <>
      <Head>
        <title>Tarik Ozturk</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!showCert && (
        <div className={darkMode ? "dark" : ""}>
          <main className="  pb-12 md:pb-24 xl:pb-36 bg-blue-100 px-8 lg:px-20 2xl:px-32 dark:bg-gray-900">
            <section className="min-h-screen">
              <nav className="py-8 mb-4 flex justify-between dark:text-white">
                <h1 className=" lg:text-lg 2xl:text-xl font-burtons">
                  <a href="#projects">Projects</a>&emsp;|&emsp;
                  <a href="https://tozturk.hashnode.dev/" target={"_blank"}>
                    Blogs
                  </a>
                </h1>
                <ul className="flex items-center">
                  {/* <li>
                Music
              </li> */}
                  <li>
                    {darkMode ? (
                      <BsSunFill
                        className="cursor-pointer md:text-2xl "
                        onClick={() => setDarkMode(!darkMode)}
                      />
                    ) : (
                      <BsFillMoonStarsFill
                        className="cursor-pointer md:text-2xl "
                        onClick={() => setDarkMode(!darkMode)}
                      />
                    )}
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                      href={"/resume/TarikOzturk-Resume.pdf"}
                      download
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="text-center lg:p-5 2xl:p-10">
                {/* <h3 className='text-4xl py-2 md:text-5xl dark:text-white'>Hi, I am</h3> */}
                {/* <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Tarik Ozturk</h2> */}
                {/* <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Developer </h3> */}

                <h1 className="mb-1 font-mono dark:text-white text-2xl xl:text-3xl 2xl:text-4xl">
                  Hi, I&apos;m <br className="block md:hidden" />
                  <span className="relative">
                    <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent font-bold dark:text-teal-400 text-teal-600  text-2xl xl:text-3xl 2xl:text-4xl ">
                      Tarik
                    </span>
                    <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-blue-100 dark:bg-gray-900 w-full animate-type will-change`}"></span>
                  </span>
                </h1>
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden my-4 w-64 h-64  xl:w-72 xl:h-72 2xl:w-80 2xl:h-80">
                <Image alt="" src={tarikPic} layout="fill" objectFit="cover" />
              </div>
              <p className=" lg:text-xl text-lg mb-4 py-2 leading-8 text-center dark:text-gray-100 font-burtons">
                Software Developer
              </p>
              <div className=" text-3xl xl:text-4xl 2xl:text-5xl flex justify-center my-4 gap-16 text-gray-600 dark:text-gray-400">
                <a href="https://twitter.com/tarikozturkk" target={"_blank"}>
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="https://www.linkedin.com/in/tarik-ozturk-28b050159/"
                  target={"_blank"}
                >
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/tarikozturk017" target={"_blank"}>
                  <AiFillGithub />
                </a>
              </div>
              <p className=" text-center mt-2 xl:mt-4 py-5 leading-8 text-gray-800 text-sm md:text-lg 2xl:text-xl max-w-7xl mx-auto dark:text-gray-200">
                I am a developer with a passion for creating efficient solutions
                to complex problems. My interest in solving problems developed
                through life science while studying for my B.S. in Physiotherapy
                and Rehabilitation. Then I started learning programming as a
                hobby, which led a career change. I recently graduated from
                Computer Programming at Seneca College in Toronto with High
                Honours. During my study, I focused on data structures and
                algorithms, object oriented programming, database management,
                backend and frontend web development, software analysis and
                design. I wish to continue working with passionate teams of
                talented developers to create technology that benefits its users
                by improving their daily health and everyday life.
              </p>
            </section>

            <section id="projects">
              <div className="text-center">
                <h3 className="text-2xl md:text-4xl lg:5xl mb-8 py-1 dark:text-white">
                  Projects
                </h3>
                {/* <p className='text-xl  py-2 leading-8 text-gray-400 font-burtons'>
              Hover over images to play demo
            </p> */}
              </div>
              <div></div>
            </section>
            <section>
              <div className=" text-center">
                <button
                  className=" w-48 cursor-pointer bg-gradient-to-r text-md from-cyan-500 to-teal-500 text-white px-6 py-2 my-8 rounded-t-xl rounded-b-3xl "
                  onClick={() => {
                    setExpendList(!expendList);
                  }}
                >
                  {!expendList
                    ? "Click To See Listed Style (All Projects)"
                    : "Click To See Sliding Style"}{" "}
                </button>
              </div>
              {/* // <Carousel> */}
              {!expendList ? (
                <Carousel
                  // autoplay autoplayInterval={5000}
                  wrapAround
                  slidesToShow={1}
                  speed={700}
                  defaultControlsConfig={{
                    nextButtonText: ">",
                    prevButtonText: "<",
                    pagingDotsStyle: {
                      tabSize: 48,
                      fill: "#06b6d4",
                    },
                    prevButtonStyle: {
                      color: "#06b6d4",
                      fontWeight: "bolder",
                      backgroundColor: "transparent",
                      fontSize: "3rem",
                      opacity: "0.9",
                    },
                    nextButtonStyle: {
                      color: "#06b6d4",
                      fontWeight: "bolder",
                      backgroundColor: "transparent",
                      fontSize: "3rem",
                      opacity: "0.9",
                    },
                  }}
                >
                  {carouselContent}
                </Carousel>
              ) : (
                <Projects />
              )}
            </section>

            <section>
              <div className=" text-center">
                {/* {expendList && <Projects />} */}
              </div>
            </section>
          </main>
        </div>
      )}
      {showCert && (
        <div className={darkMode ? "dark" : ""}>
          <CertAwards setShowCert={setShowCert} />
        </div>
      )}
      {/* <SendForm /> */}
      {/* <Footer /> */}
      <Footer setShowCert={setShowCert} />
    </>
  );
}
