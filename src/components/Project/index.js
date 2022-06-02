import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './Project.css'
import subscribe from '../../assets/imgs/subscribe.png';


function Project() {
   const [projects] = useState([
     {
       name: "Subscribe-o-Matic",
       imgName: "subscribe.png",
       url: "https://subscribe-o-matic.herokuapp.com/",
       github: "https://github.com/snehitak20/subscribe-o-matic",
     },
     {
       name: "Let's Stay In",
       imgName: "landing.png",
       url: "https://snehitak20.github.io/lets-stay-in/",
       github: "https://github.com/snehitak20/lets-stay-in",
     },
     {
       name: "Note Taker",
       imgName: "note.png",
       url: "https://memory-help-pls.herokuapp.com/",
       github: "https://github.com/snehitak20/memory-help-pls",
     },
     {
       name: "Weather Dashboard",
       imgName: "weather.png",
       url: "https://snehitak20.github.io/chance-of-meatballs/",
       github: "https://github.com/snehitak20/chance-of-meatballs",
     },
     {
        name: "Code Quiz",
        imgName: "codeQuiz.png",
        url: "https://snehitak20.github.io/under-the-sea/",
        github: "https://github.com/snehitak20/under-the-sea",
      },
      {
        name: "Password Generator",
        imgName: "password.png",
        url: "https://snehitak20.github.io/faster-than-fast/",
        github: "https://github.com/snehitak20/faster-than-fast",
      },
   ]);

   return (
    <Container>
    <Row>
      {projects.map((project, i) => (
        <Col xs={12} md={4}>
          <Card key={i}>
            <Card.Img
              src={subscribe}
              alt={project.name}
              className="project-image"
              variant="top"
            ></Card.Img>
            <Card.ImgOverlay>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <i class="fas fa-external-link-alt fa-lg"></i>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i class="fab fa-github fa-lg"></i>
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
}

export default Project;