import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
   return (
     <Container className="footer" fluid>
       <Row>
         <Col xs={6} md={{ span: 3, offset: 3 }}>
           <p className="footer-text">&copy; Snehita Kolli, 2022</p>
         </Col>
         <Col xs={6} md={6}>
           <a
             href="www.linkedin.com/in/snehitakolli"
             target="_blank"
             rel="noreferrer"
           >
             <p className="footer-icon">
               <i class="fab fa-linkedin fa-md"></i>
             </p>
           </a>
           <a
             href="https://github.com/snehitak20"
             target="_blank"
             rel="noreferrer"
           >
             <p className="footer-icon">
               <i class="fab fa-github fa-md"></i>
             </p>
           </a>

           <a
            href="https://www.instagram.com/snehitaa/"
            target="_blank"
            rel="noreferrer"
            >
                <p className="footer-icon">
                    <i class="fab fa-instagram fa-md"></i>
                </p>
            </a>
         </Col>
       </Row>
     </Container>
   );
}

export default Footer;