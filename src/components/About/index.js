import React from 'react';
import self from '../../assets/sneha1.jpg';
import { Row, Col } from 'react-bootstrap';
import './About.css'

function About() {
   return (
     <Row>
       <Col xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 0 }}>
         <img src={self} alt="portrait of me" className="portrait"></img>
       </Col>
       <Col xs={{ span: 10, offset: 1 }} md={{ span: 7, offset: 1 }}>
            <p className="about-text">
                Hi there, I'm Snehita Kolli. I am a full stack web developer with knowledge and proficiency in JavaScript, HTML, CSS, and mobile-first responsive web development. 
                I have strong skills and ability in writing clean and efficient code. Currently, I am enrolled in the UC Berkeley Extension Coding Bootcamp to further my goal of receiving a Certification in Full Stack Engineering. I am hoping to use this certificate in conjunction with my background in medical sciences to develop user-friendly web applications for patients. 
                With each project, I aim to engage my audience with an effective, smooth, and problem-free user experience.
                I am excited to further enhance my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences for users on the web.
            </p>
       </Col>
     </Row>
   );
}

export default About;

