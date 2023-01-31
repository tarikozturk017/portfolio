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
		
		{/* <Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column> */}
		<Column>
        <Heading>Contact Me</Heading>
			<SendForm />
		</Column>
        <Column>
        
		</Column>

        <Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>

		<Column>
			<Heading>Social</Heading>
            <FooterLink href="https://github.com/tarikozturk017">
            <div className="flex items-center">
                <AiFillGithub />
				<span className=" ml-3" >
				    Github
				</span>
            </div>
			</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/tarik-ozturk-28b050159/">
            <div className="flex items-center">
                <AiFillLinkedin />
				<span className=" ml-3" >
				    LinkedIn
				</span>
            </div>
			</FooterLink>
			<FooterLink href="https://twitter.com/tarikozturk017">
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
    <h1 className="mt-5" style={{ color: "#009688",
				textAlign: "center" }}>
		<small className="font-burtons">&copy; 2023 | Created by Tarik Ozturk</small>
	</h1>
	</Box>
);
};
export default Footer;
