import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
import {gitHubIcon, linkedin} from "./images/index";

class Contact extends React.Component {
  render() {
    return (
      <Container fluid id="contact" className="mt-5 p-3 bg-white">
        <div className="py-5 m-4 bg-white">
          <h2 className="m-3"> Contact Info </h2>
          <p className="m-3">
            To get in contact, please follow the link to my resume, where you
            will find my contact info.
          </p>
          <div className="d-flex justify-content-left">
            <a href="https://rosborn92.github.io/myResume" className="m-3">
              RESUME
            </a>
            <a href="https://github.com/rosborn92" className="m-3">
              <img src={gitHubIcon} style={{width: "35px"}} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/rob-osborn/" className="m-3">
              <img src={linkedin} style={{width: "35px"}} alt="" />
            </a>
          </div>
        </div>
      </Container>
    );
  }
}
export default Contact;
