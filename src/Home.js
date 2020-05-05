import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./style.css";
import {
  gitHubIcon,
  linkedin,
  rob,
  bikeIcon,
  surfIcon,
  tennisIcon,
  snowboardIcon,
  hikeIcon
} from "./images/index";

class Home extends React.Component {
  render() {
    // <Container fluid id="home" className="mt-5 p-5">
    return (
      <Container fluid id="home" className="page">
        <div id="homeDiv">
          <h2 id="firstH">WHATSUP? </h2>
          <h2 id="secondH">WELCOME TO MY PORTFOLIO!</h2>
          <div className="flexRow">
            <div className="bodyCol">
              <p align="justify">
                My name is Rob, and I am a full stack developer from Los
                Angeles, California. This page contains some of my projects, a
                list of my technical skills, and an updated resume. On a
                personal level, I am an outgoing and competitive person who
                loves to balance the hours in front of the screen with outdoor
                activities, yoga, and artistic endeavors
              </p>

              <p align="justify">
                I've always lived true to the saying, "Do what you love, and you
                will never work a day in your life." That has led me down an
                exciting path thus far, but, until relatively recently, I was
                unsatisfied with my prospect of a career. I was searching for a
                vocation where I could make an impact. Furthermore, I'd always
                wanted to work in the tech industry. I love gadgets and wanted
                to work on them myself. Programming was the answer that has
                allowed me to begin that journey. It has been an absolutely
                joyful adventure reminiscent of learning a foreign language in
                the sense that there is always something new to learn and
                improve upon. I enjoy that aspect of programming as well as the
                gratification I get from working on projects
              </p>

              <p align="justify">
                I look forward to a long career in development and hope to use
                it as a platform to make a positive impact in our world, travel,
                and connect with people from around the globe. I am very
                grateful to the tech community at large for welcoming new
                members and providing resources to learn and grow
              </p>
            </div>
            <div id="profile">
              <Image width={290} height={370} src={rob} alt="Profile Picture" />
              <p style={{fontSize: "2em"}}> Rob Osborn </p>
              <p>--full stack software developer--</p>
              <div className="d-flex justify-content-center">
                <a
                  target="_blank"
                  href="https://github.com/rosborn92"
                  className="mr-4"
                >
                  <img src={gitHubIcon} style={{width: "35px"}} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rob-osborn/"
                >
                  <img src={linkedin} style={{width: "35px"}} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div id="icons">
            <Image src={bikeIcon} width={50} height={50} />
            <Image src={surfIcon} width={50} height={50} />
            <Image src={tennisIcon} width={50} height={50} />
            <Image src={snowboardIcon} width={50} height={50} />
            <Image src={hikeIcon} width={50} height={50} />
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
