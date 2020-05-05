import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
import {gitHubIcon, linkedin} from "./images/index";

class Contact extends React.Component {
  render() {
    // <Container fluid id="contact" className="mt-5 p-3">
    return (
      <Container fluid id="contact" className="page">
        <div className="pgBody">
          <div className="" style={{textAlign: "center"}}>
            <h2 className="contactH"> CONTACT INFO </h2>
            <p className="">
              To get in contact, please follow the link to my resume, where you
              will find my contact info.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <a
                target="_blank"
                href="https://rosborn92.github.io/myResume"
                style={{fontSize: "1.5em"}}
                id="resume"
              >
                RESUME
              </a>
              <a
                target="_blank"
                href="https://github.com/rosborn92"
                className="linkone"
              >
                <img src={gitHubIcon} style={{width: "35px"}} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rob-osborn/"
                className="linktwo"
              >
                <img src={linkedin} style={{width: "35px"}} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Contact;
