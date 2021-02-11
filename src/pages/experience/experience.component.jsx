import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 5 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h1>Arctwist Technology Solutions, Kolkata, India</h1>

              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">

                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front End Developer</strong>
                    <br />
                    <strong>Technology:</strong> HTML 5, CSS3, React JS, React-Router, React-redux
                    <br />
                    <strong>Duration:</strong> March 2017 - August 2018
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Designing, implementing and maintaining React based applications and delivering high availability and performance.</li>
                      <li>Building solutions in Agile workflow and contributing in all phases of development cycle</li>
                      <li>Conducting software analysis, programming, testing and debugging</li>

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
