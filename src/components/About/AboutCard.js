import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there fellow human! I'm <span className="purple">Deepil Tiwari </span>
            <br />I'm a recent Computer Science graduate, looking forward to kick-start my career in designing and devloping user-centric tech products and software.
            <br />
            <br />
            I would love to solve the <span className="purple"> "Norman Door" </span>problems of the tech world !
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Beauty and brains, pleasure and usability - they should go hand in hand."{" "}
          </p>
          <footer className="blockquote-footer">Don Norman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
