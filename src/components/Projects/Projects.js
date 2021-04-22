import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import honors from "../../Assets/Projects/with_honors.png";
import mockup from "../../Assets/Projects/Mockup.jpg";
import rapid from "../../Assets/Projects/Rapid.png";
import github from "../../Assets/Projects/GitHub-Mark.png";
import pdf from "../../Assets/Projects/PDF_IMG.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are some of the projects I worked on during my time at YSU.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={honors}
              isBlog={false}
              title="With Honors Magazine Design"
              description="This is a uiversity department project, done in collaboration with creative services. I designed the layout and got it to production ready!"
              link="https://issuu.com/youngstownstate/docs/honors_magazine_spring_2019"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mockup}
              isBlog={false}
              title="YSU website redesign"
              description="This is one of the many mockups I made. We collaborated with our web team and website administrator to come up with clean and user friendly website layout. The layout was designed using Adobe XD."
              link="https://drive.google.com/file/d/1O_9tAj5P_SerTQPkaRysXLj5FqjxtYNk/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rapid}
              isBlog={false}
              title="An accident management and rapid response system."
              description="Designed and developed a rapid response system, which is to be used by EMTs and First Responders in a accident situation. Our team collaborated with local clients to get their feedback and understand their necessities in a crisis situation. In case of an accident, our system locates the nearest first responder and guides them to the site using shortest distance possible through Google maps API."
              link="https://github.com/deepilt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="My other University Projects"
              description="My github with various university projects."
              link="https://github.com/deepilt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdf}
            isBlog={false}
            title="Alternate Platform for Online Teaching Learning "
            description="On this project I researched and analyzed several online Learning Management Systems, including Blackboard Learn, Sakai, Udemy etc. and performed usability testing. I Appraised and documented the user experience of various LMS by surveying fellow classmates and university students."
            link="https://drive.google.com/file/d/1PSJzDEZXHyPnR2lS_Ps754HPhz9PJVIH/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
