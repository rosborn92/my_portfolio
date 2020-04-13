import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App bg-secondary p-5">
      <Navbar collapseOnSelect fixed="top" bg="light" expand="md">
        <Navbar.Brand href="#home">Rob Osborn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#my toolbox">SKILLS</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container
        fluid
        id="home"
        className="d-flex justify-content-center bg-white p-3 mt-5"
      >
        <Row className="d-flex justify-content-center">
          <Col>
            <h1>WHATSUP? </h1>
            <h1> WELCOME TO MY PORTFOLIO!</h1>
            <p>
              My name is Rob, and I am a web developer based in San Diego. This
              page contains some of my projects, a list of my technical skills,
              and an updated resume. On a personal level, I am an outgoing and
              competitive person who loves to balance the hours in front of the
              screen with outdoor activities, yoga, and artistic endeavors
            </p>
            <p>
              I spent the first few years out of college trying out several
              careers before traveling and immersing myself in the world of
              yoga. That journey has provided me with a foundation from which to
              grow where I feel more connected with the world and myself than
              ever before
            </p>
            <p>
              After a long time pondering a transition to the world of
              programming, I finally decided to give it a shot. It's been a
              joyful adventure reminiscent of learning a foreign language. I
              feel lucky to learn new things each day and love the challenge
              that comes with the work
            </p>
            <p>
              I look forward to a long career in development and hope to use it
              as a platform to make a positive impact in our world, travel, and
              connect with people from around the globe. I am very grateful to
              the tech community at large for welcoming new members and
              providing resources to learn and grow
            </p>
          </Col>
          <Col className="d-flex justify-content-center align-content-center">
            <center>
              <Image
                width={260}
                className="p-3"
                src="rob.png"
                alt="Profile Picture"
              />
              <h2 className="pt-3"> Rob Osborn </h2>
              <p>--a full stack web developer--</p>
              <div className="d-flex justify-content-center">
                <a href="https://github.com/rosborn92" className="m-3">
                  <img src="gitHubIcon.png" style={{width: "35px"}} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rob-osborn/"
                  className="m-3"
                >
                  <img src="linkedin.png" style={{width: "35px"}} alt="" />
                </a>
              </div>
            </center>
          </Col>
        </Row>
      </Container>
      <Container fluid id="my toolbox" className="mt-5 p-5 bg-white">
        <center>
          <h1 className="py-5"> MY TOOLBOX </h1>
        </center>
        <Row className="d-flex flex-wrap justify-content-center">
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="html.png" alt="html logo" />
              <h4 className="pt-3">HTML</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="css.png" alt="css logo" />
              <h4 className="pt-3">CSS</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image
                width={60}
                height={60}
                src="javascript.png"
                alt="JavaScript logo"
              />
              <h4 className="pt-3">JavaScript</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image
                width={60}
                height={60}
                src="logo192.png"
                alt="React logo"
              />
              <h4 className="pt-3">REACT</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="ruby.png" alt="Ruby Logo" />
              <h4 className="pt-3">RUBY</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="rails.png" alt="Rails Logo" />
              <h4 className="pt-3">RAILS</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="java.png" alt="Java Logo" />
              <h4 className="pt-3">JAVA</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image
                width={60}
                height={60}
                src="postgresql.png"
                alt="PostgreSQL Logo"
              />
              <h4 className="pt-3">PostgreSQL</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image
                width={60}
                height={60}
                src="bootstrap.png"
                alt="Bootstrap Logo"
              />
              <h4 className="pt-3">Bootstrap</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image
                width={60}
                height={60}
                src="postman.png"
                alt="Postman Logo"
              />
              <h4 className="pt-3">Postman</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="rspec.png" alt="Rspec Logo" />
              <h4 className="pt-3">RSpec</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src="jest.png" alt="Jest Logo" />
              <h4 className="pt-3">Jest</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image
                width={60}
                height={60}
                src="styledComponents.png"
                alt="Styled Components Logo"
              />
              <h4 className="pt-3">Styled Components</h4>
            </center>
          </Col>
        </Row>
      </Container>
      <Container fluid id="projects" className="mt-5 p-3 bg-white">
        <h1 className="d-flex justify-content-center py-5"> PROJECTS </h1>
        <div className="d-flex flex-wrap justify-content-center pm-4">
          <center>
            <div className="row m-3">
              <div className="col p-1 m-3">
                <div
                  className="card bg-secondary py-2"
                  style={{width: "20rem", height: "25rem"}}
                >
                  <img
                    className="card-img-top"
                    style={{width: "8rem", height: "8rem"}}
                    src="pnb.png"
                    alt="Pie N Burger Logo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pie 'n Burger</h5>
                    <h6 className="card-subtitle mb-2">
                      React || JavaScript || CSS || HTML
                    </h6>
                    <p className="card-text">
                      A professional website build using React. I designed and
                      built the app as a freelance job.
                    </p>
                    <a
                      href="http://pnb-react-app.herokuapp.com/"
                      className="btn btn-primary m-1"
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/rosborn92/pnb-react-app"
                      className="btn btn-primary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="col p-1 m-3">
                <div
                  className="card bg-secondary py-2"
                  style={{width: "20rem", height: "25rem"}}
                >
                  <img
                    className="card-img-top"
                    style={{width: "90%"}}
                    src="https://i.makeagif.com/media/2-10-2020/0b2cHG.gif"
                    alt="LJP"
                  />
                  <div className="card-body">
                    <h5 className="card-title">CodingZeal Internship</h5>
                    <h6 className="card-subtitle">
                      Ruby on Rails || React || HTML || CSS || JavaScript
                    </h6>
                    <p className="card-text">
                      I built this site in my month-long internship with 3 other
                      interns for La Jolla Playhouse's annual Pop Tour.
                    </p>
                    <a
                      href="https://makeagif.com/i/0b2cHG"
                      className="btn btn-primary m-1"
                    >
                      View Site
                    </a>
                    <a
                      href="https://github.com/rosborn92/internProject"
                      className="btn btn-primary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="col p-1 m-3">
                <div
                  className="card bg-secondary py-2"
                  style={{width: "20rem", height: "25rem"}}
                >
                  <img
                    className="card-img-top"
                    style={{width: "90%"}}
                    src="humanKind.png"
                    alt="HumanKind Logo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Human Kind</h5>
                    <h6 className="card-subtitle mb-2">
                      React || Ruby on Rails || Bootstrap
                    </h6>
                    <p className="card-text mb-0">
                      A social platform to encourage good deeds!{" "}
                    </p>
                    <p className="card-text">
                      This was a group project for my coding bootcamp.
                    </p>
                    <a
                      href="https://cryptic-crag-66013.herokuapp.com/"
                      className="btn btn-primary"
                    >
                      View App
                    </a>
                    <a
                      href="https://github.com/teamTBD/Human_Kind"
                      className="btn btn-primary m-1"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </Container>
      <Container fluid id="contact" className="mt-5 p-3 bg-white">
        <div className="py-5 m-4 bg-white">
          <h2 className="m-3"> Contact Info </h2>
          <p className="m-3">
            To get in contact, please follow the link to my resume, where you
            will find my contact info.
          </p>
          <div className="d-flex justify-content-left">
            <a href="https://rosborn92.github.io/myResume/" className="m-3">
              RESUME
            </a>
            <a href="https://github.com/rosborn92" className="m-3">
              <img src="gitHubIcon.png" style={{width: "35px"}} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/rob-osborn/" className="m-3">
              <img src="linkedin.png" style={{width: "35px"}} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
