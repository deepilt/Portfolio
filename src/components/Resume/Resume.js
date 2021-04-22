
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/Deepil-Tiwari.pdf";

function Resume() {


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="GRAPHICS DESIGNER - Marketing and communications [YSU]"
              date="January 2019 - Present"
              content={[
                "Designed and illustrated various artworks, logos and working samples for clients across the university departments",
                "Coordinated with web team in developing University’s website mock-ups and mobile application layout.",
                "Collaborated with fellow designers on updating the Visual Standard Guidelines for the university."
              ]}
            />
            <Resumecontent
              title="Information Technology Intern – Raman Construction Pvt Ltd, Nepal"
              date="December 2019 - January 2020"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
            //  ]}
            ///>
            //<Resumecontent
            // title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
            //content={[
              "Facilitated in maintaining and troubleshooting various network infrastructures and IT components across the company departments.",
              "Aided in installation of various software and hardware components as required."
            ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Science in Computer Science with Minor in Mathematics "
              date="2017 - 2021"
              content={[`Youngstown State University, Ohio`]}
            />

            <h3 className="resume-title">Awards and Honors</h3>
            <Resumecontent
              title=""
              content={[
                `Presidential Mentor for academic year, 2020-2021`,
                `HRH Sir and Same W.W. Onunwor Memorial Scholarship – 2019`,
                "International scholarship award, 2017-2021",
                ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
