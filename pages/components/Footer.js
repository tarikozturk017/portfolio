import React from "react";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import SendForm from "./SendForm";

const Footer = () => {
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

		<div className=" flex flex-col text-left ml-16">
        <div className="text-2xl text-white mb-10 font-bold ml-0">Contact Me</div>
			<SendForm />
		</div>
        {/* <Column>
        
		</Column> */}

        <div className=" flex flex-col text-left lg:ml-32 md:ml-24">
            <div className="text-2xl text-white mb-10 font-bold">About</div>
			<div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="#">Blogs</div>
			<div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="#">Courses | Certificate</div>
			<div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://clubs.ssfinc.ca/ssdc/home/" target={'_blank'}>Seneca Software Developers Club</div>
			<div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://github.com/tarikozturk017/SLG-practices" target={'_blank'}>SLG Workshops</div>
		</div>

		<div className=" flex flex-col text-left ">
        <div className="text-2xl text-white mb-10 font-bold">Social</div>
            <div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://github.com/tarikozturk017" target={'_blank'}>
            <div className="flex items-center">
                <AiFillGithub />
				<span className=" ml-3" >
				    Github
				</span>
            </div>
			</div>
			<div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://www.linkedin.com/in/tarik-ozturk-28b050159/" target={'_blank'}>
            <div className="flex items-center">
                <AiFillLinkedin />
				<span className=" ml-3" >
				    LinkedIn
				</span>
            </div>
			</div>
			<div className="text-white mb-5 text-lg no-underline hover:text-teal-500 duration-200 cursor-pointer" href="https://twitter.com/tarikozturk017" target={'_blank'}>
            <div className="flex items-center">
                <AiFillTwitterCircle />
				<span className=" ml-3" >
				    Twitter
				</span>
            </div>
			</div>
            
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
