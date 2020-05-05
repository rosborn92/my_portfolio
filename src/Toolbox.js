import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import {
  bootstrap,
  css,
  html,
  java,
  gulp,
  eslint,
  javascript,
  jest,
  postgresql,
  postman,
  rails,
  react,
  rspec,
  gitHubIcon,
  flux,
  heroku,
  materialDesign,
  mongo,
  node,
  ruby,
  styledComponents
} from "./images/index";

class Toolbox extends React.Component {
  render() {
    // <Container fluid id="toolbox" className="mt-5 p-5">
    return (
      <Container fluid id="toolbox" className="page">
        <h2 className="toolH"> MY TOOLBOX </h2>
        <div className="pgBody">
          <Row className="skills d-flex flex-wrap justify-content-center">
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={html} alt="html logo" />
                <p className="toolP">HTML</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={css} alt="css logo" />
                <p className="toolP">CSS</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={javascript}
                  alt="JavaScript logo"
                />
                <p className="toolP">JavaScript</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={react} alt="React logo" />
                <p className="toolP">REACT</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={ruby} alt="Ruby Logo" />
                <p className="toolP">RUBY</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={rails} alt="Rails Logo" />
                <p className="toolP">RAILS</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={java} alt="Java Logo" />
                <p className="toolP">JAVA</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={postgresql}
                  alt="PostgreSQL Logo"
                />
                <p className="toolP">PostgreSQL</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={bootstrap}
                  alt="Bootstrap Logo"
                />
                <p className="toolP">Bootstrap</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={postman}
                  alt="Postman Logo"
                />
                <p className="toolP">Postman</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={rspec} alt="Rspec Logo" />
                <p className="toolP">RSpec</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={jest} alt="Jest Logo" />
                <p className="toolP">Jest</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={styledComponents}
                  alt="Styled Components Logo"
                />
                <p className="toolP">Styled Components</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={materialDesign}
                  alt="Material Design Logo"
                />
                <p className="toolP">Material Design</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={mongo} alt="MongoDB Logo" />
                <p className="toolP">MongoDB </p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={heroku} alt="Heroku Logo" />
                <p className="toolP">Heroku </p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image
                  width={60}
                  height={60}
                  src={gitHubIcon}
                  alt="GitHub Logo"
                />
                <p className="toolP">GitHub</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={flux} alt="Flux Logo" />
                <p className="toolP">Flux </p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={node} alt="Node.js Logo" />
                <p className="toolP">Node.js </p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={gulp} alt="Gulp Logo" />
                <p className="toolP">Gulp.js</p>
              </center>
            </Col>
            <Col className="mx-3 p-3">
              <center>
                <Image width={60} height={60} src={eslint} alt="ESLint Logo" />
                <p className="toolP">ESLint</p>
              </center>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Toolbox;
