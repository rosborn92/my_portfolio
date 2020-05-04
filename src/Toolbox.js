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
  javascript,
  jest,
  postgresql,
  postman,
  rails,
  react,
  rspec,
  ruby,
  styledComponents
} from "./images/index";

class Toolbox extends React.Component {
  render() {
    return (
      <Container fluid id="toolbox" className="mt-5 p-5 bg-white">
        <center>
          <h1 className="py-5"> MY TOOLBOX </h1>
        </center>
        <Row className="skills d-flex flex-wrap justify-content-center">
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={html} alt="html logo" />
              <h4 className="pt-3">HTML</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={css} alt="css logo" />
              <h4 className="pt-3">CSS</h4>
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
              <h4 className="pt-3">JavaScript</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={react} alt="React logo" />
              <h4 className="pt-3">REACT</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={ruby} alt="Ruby Logo" />
              <h4 className="pt-3">RUBY</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={rails} alt="Rails Logo" />
              <h4 className="pt-3">RAILS</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={java} alt="Java Logo" />
              <h4 className="pt-3">JAVA</h4>
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
              <h4 className="pt-3">PostgreSQL</h4>
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
              <h4 className="pt-3">Bootstrap</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={postman} alt="Postman Logo" />
              <h4 className="pt-3">Postman</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={rspec} alt="Rspec Logo" />
              <h4 className="pt-3">RSpec</h4>
            </center>
          </Col>
          <Col className="mx-3 p-3">
            <center>
              <Image width={60} height={60} src={jest} alt="Jest Logo" />
              <h4 className="pt-3">Jest</h4>
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
              <h4 className="pt-3">Styled Components</h4>
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Toolbox;
