import React from "react";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import SendForm from "./SendForm";
 
const Footer = ( { setShowCert } ) => {

	const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

	return (
	<div id="box" className=" p-12 bg-black  bottom-0 w-full clear-both absolute" style={{ 
        clear: "both",
        position: "relative",
        
         }}>
       
	<div id="container" className=" flex flex-col justify-center max-w-screen-lg mx-auto my-0 ">
		<div id="row" style={{ 
        display: "grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr)) ",
        gridGap: "80px",
        
        }}>

		<div className=" flex flex-col text-left ">
        <div className="text-2xl text-white mb-10 font-bold ml-0">Contact Me</div>
			<SendForm />
		</div>
        {/* <Column>
        
		</Column> */}

        <div className=" flex flex-col text-left lg:ml-32 md:ml-24">
            <div className="sm:text-2xl text-xl text-white mb-10 font-bold">About</div>
			<a className="text-white mb-5 sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://tozturk.hashnode.dev/" target={'_blank'}>Blogs</a>
			<div className="text-white mb-5 sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" 
				onClick={() => {
					scrollToTop()
					// console.log('scrol')
					setShowCert(true)
				}}>
				Awards | Certificates
			</div>
			<a className="text-white mb-5 sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://clubs.ssfinc.ca/ssdc/home/" target={'_blank'}>Seneca Software Developers Club</a>
			<a className="text-white mb-5 sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://github.com/tarikozturk017/SLG-practices" target={'_blank'}>SLG Workshops</a>
		</div>

		<div className=" flex flex-col text-left ">
        <div className=" sm:text-2xl text-xl text-white mb-10 font-bold">Social</div>
            <a className="flex mb-5 text-white sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://github.com/tarikozturk017" target={'_blank'}>
            <div className=" flex  items-center ">
                <AiFillGithub />
				<span className=" ml-3" >
				    Github
				</span>
			</div>
            </a>
            <a className="flex mb-5 text-white sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://www.linkedin.com/in/tarik-ozturk-28b050159/" target={'_blank'} >
			<div className=" flex items-center">
                <AiFillLinkedin />
				<span className=" ml-3" >
				    LinkedIn
				</span>
			</div>
            </a>
			<a className="text-white  mb-5 sm:text-lg text-base no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://twitter.com/tarikozturkk" target={'_blank'}>
            <div className="flex items-center">
                <AiFillTwitterCircle />
				<span className=" ml-3" >
				    Twitter
				</span>
            </div>
			</a>
            
		</div>
	</div>
    </div>

    <h1 className="mt-5" style={{ color: "white",
				textAlign: "center" }}>
		<small className="font-burtons">&copy; 2023 | Created by Tarik Ozturk</small>
	</h1>
	</div>
);
};
export default Footer;
