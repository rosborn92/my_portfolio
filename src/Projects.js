import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
import {humanKind, pnb} from "./images/index";

class Projects extends React.Component {
  goToSlide = () => {
    let {goToSlide, index} = this.props;
    return goToSlide(index);
  };

  goToPrevSlide = () => {
    let {goToPrevSlide, index} = this.props;
    return goToPrevSlide();
  };

  goToNextSlide = () => {
    let {goToNextSlide, index} = this.props;
    return goToNextSlide();
  };
  render() {
    const slides = [1, 2, 3, 4];
    return (
      <Container fluid id="projects" className="mt-5 p-3 bg-white">
        <center>
          <h1 className="py-5"> MY PROJECTS </h1>
        </center>
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
                    src={pnb}
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
                    <h5 className="card-title">Coding Zeal Internship</h5>
                    <h6 className="card-subtitle">
                      Ruby on Rails || React || HTML || CSS || JavaScript ||
                      Styled Components
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
                    src={humanKind}
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
              <div className="col p-1 m-3">
                <div
                  className="card bg-secondary py-2"
                  style={{width: "20rem", height: "25rem"}}
                >
                  <img
                    className="card-img-top"
                    style={{width: "90%"}}
                    src="https://i.makeagif.com/media/5-03-2020/7mmjgQ.gif"
                    alt="Gif of Video Task Manager Project"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Video Task Manager</h5>
                    <h6 className="card-subtitle mb-2">
                      JavaScript || Node.js || Material Design || YouTube ||
                      REST API
                    </h6>
                    <p className="card-text mb-0">
                      A BuildFire mobile plugin allowing users to complete tasks
                      while learning from an instructional video.
                    </p>
                    <p className="card-text">
                      This is live in BuildFire's marketplace
                    </p>
                    <a
                      href="https://i.makeagif.com/media/5-03-2020/7mmjgQ.gif"
                      title="VideoTaskManager"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </Container>
    );
  }
}
export default Projects;
