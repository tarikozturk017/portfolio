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

const Footer = () => {
return (
	<Box style={{ 
        clear: "both",
        position: "relative",
        
         }}>

	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social</Heading>
            <FooterLink href="https://github.com/tarikozturk017">
            <div className="flex items-center">
                <AiFillGithub />
				<span style={{ marginLeft: "10px" }}>
				    Github
				</span>
            </div>
			</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/tarik-ozturk-28b050159/">
            <div className="flex items-center">
                <AiFillLinkedin />
				<span style={{ marginLeft: "10px" }}>
				    LinkedIn
				</span>
            </div>
			</FooterLink>
			<FooterLink href="https://twitter.com/tarikozturk017">
            <div className="flex items-center">
                <AiFillTwitterCircle />
				<span style={{ marginLeft: "10px" }}>
				    Twitter
				</span>
            </div>
			</FooterLink>
            
		</Column>
		</Row>
	</Container>
    <h1 style={{ color: "#009688",
				textAlign: "center",
				marginTop: "+50px" }}>
		<small>&copy; 2023 | Created by Tarik Ozturk</small>
	</h1>
	</Box>
);
};
export default Footer;
