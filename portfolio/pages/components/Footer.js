import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import SendForm from "./SendForm";

const Footer = () => {
return (
	<Box className="clear-both relative" style={{ 
        clear: "both",
        position: "relative",
        
         }}>

	
	<Container>
		<Row>

		<Column>
        <Heading>Contact Me</Heading>
			<SendForm />
		</Column>
        <Column>
        
		</Column>

        <Column>
			<Heading>About</Heading>
			<FooterLink href="#">Blogs</FooterLink>
			<FooterLink href="#">Courses | Certificate</FooterLink>
			<FooterLink href="https://clubs.ssfinc.ca/ssdc/home/" target={'_blank'}>Seneca Software Developers Club </FooterLink>
			<FooterLink href="https://github.com/tarikozturk017/SLG-practices" target={'_blank'}>SLG Workshops</FooterLink>
		</Column>

		<Column>
			<Heading className="">Social</Heading>
            <FooterLink href="https://github.com/tarikozturk017" target={'_blank'}>
            <div className="flex items-center">
                <AiFillGithub />
				<span className=" ml-3" >
				    Github
				</span>
            </div>
			</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/tarik-ozturk-28b050159/" target={'_blank'}>
            <div className="flex items-center">
                <AiFillLinkedin />
				<span className=" ml-3" >
				    LinkedIn
				</span>
            </div>
			</FooterLink>
			<FooterLink href="https://twitter.com/tarikozturk017" target={'_blank'}>
            <div className="flex items-center">
                <AiFillTwitterCircle />
				<span className=" ml-3" >
				    Twitter
				</span>
            </div>
			</FooterLink>
            
		</Column>
		</Row>
	</Container>
    <h1 className="mt-5" style={{ color: "white",
				textAlign: "center" }}>
		<small className="font-burtons">&copy; 2023 | Created by Tarik Ozturk</small>
	</h1>
	</Box>
);
};
export default Footer;
