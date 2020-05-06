import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import {humanKind, pnb} from "../images/index";
import "./carousel.css";

class MyCarousel extends React.Component {
  render() {
    // <Container fluid id="projects" className="mt-5 p-3">
    return (
      <Container fluid id="projects" className="page">
        <div className="pgBody">
          <h2> MY PROJECTS </h2>
          <Carousel>
            <Carousel.Item>
              <div className="slide">
                <div className="leftCol">
                  <img
                    className="d-block w-100"
                    src={pnb}
                    alt="First slide"
                    style={{maxWidth: "390px"}}
                  />
                </div>
                <div className="rightCol">
                  <h5 className="projHeader">Pie 'n Burger</h5>
                  <h6 className="">
                    React || JavaScript || CSS || HTML || Gulp
                  </h6>
                  <p className="">
                    A solo freelance project re-designing and building the
                    company's website from scratch. I orchestrated the entire
                    project from design to deployment and am working on a back
                    end for future functionality using Ruby on Rails.
                  </p>
                  <div className="flexRow">
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      href="http://pnb-react-app.herokuapp.com/"
                      className="btn btn-primary"
                    >
                      VISIT SITE
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/rosborn92/pnb-react-app"
                      className="btn btn-primary"
                    >
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slide">
                <div className="leftCol">
                  <img
                    className="d-block w-100"
                    src={humanKind}
                    alt="Second slide"
                  />
                </div>
                <div className="rightCol">
                  <h5 className="projHeader">HumanKind</h5>
                  <h6 className="">
                    React || Ruby on Rails || Devise || PostgreSQL || JBuilder
                    || S3 || Bootstrap || RSpec
                  </h6>
                  <p className="">
                    I built this with a team from my coding bootcamp. It is a
                    social platform where users can share good deeds that they
                    or others have done with the end goal of motivating others
                    to make better decisions and keep the positive actions
                    growing.
                  </p>
                  <div className="flexRow">
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      href="https://cryptic-crag-66013.herokuapp.com/"
                      className="btn btn-primary"
                    >
                      VIEW APP
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/teamTBD/Human_Kind"
                      className="btn btn-primary"
                    >
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="slide">
                <div className="leftCol">
                  <img
                    className="d-block w-100"
                    src="https://i.makeagif.com/media/2-10-2020/0b2cHG.gif"
                    alt="Third slide"
                  />
                </div>
                <div className="rightCol">
                  <h5 className="projHeader">Coding Zeal</h5>
                  <h6 className="">
                    Ruby on Rails || React || HTML || CSS || JavaScript ||
                    PostgreSQL || Styled Components || ESLint || CircleCI ||
                    Jest || Enzyme
                  </h6>
                  <p className="">
                    I worked on this project for client La Jolla Playhouse to
                    build a scheduling and logistics web application that
                    tracked clients, employees, and other relevant information
                    about each of their Pop Tour performances. I was the head
                    back-end architect but also did a lot of front-end
                    development.
                  </p>
                  <div className="flexRow">
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      href="https://makeagif.com/i/0b2cHG"
                      className="btn btn-primary"
                    >
                      VIEW SITE
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/rosborn92/internProject"
                      className="btn btn-primary"
                    >
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="slide">
                <div className="leftCol">
                  <img
                    className="d-block w-100"
                    src="https://i.makeagif.com/media/5-03-2020/7mmjgQ.gif"
                    alt="Fourth slide"
                  />
                </div>
                <div className="rightCol">
                  <h5 className="projHeader">Video Task Manager</h5>
                  <h6 className="">
                    JavaScript || Node.js || Material Design || YouTube || REST
                    API
                  </h6>
                  <p>
                    I built this mobile feature for BuildFire's platform. It
                    allows app-creators to couple a YouTube video to a list of
                    tasks for users to check off as they move through the video.
                    They can take notes, set reminders, and share the video, to
                    name a few of the features. It is in production in
                    BuildFire's marketplace.
                  </p>
                  <div className="flexRow">
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      // <a href="/gif/vtm1-P8Lqh7" title="VTM1"><img src="https://i.makeagif.com/media/5-05-2020/P8Lqh7.gif" alt="VTM1"></a><div style="font-size:11px;">make <a href="/" title="make a gif">art & design GIFs</a> like this at MakeaGif</div>
                      href="https://i.makeagif.com/media/5-05-2020/P8Lqh7.gif"
                      title="VideoTaskManager1"
                      className="btn btn-primary"
                    >
                      GIF 1
                    </a>
                    <a
                      target="_blank"
                      href="https://i.makeagif.com/media/5-04-2020/_T7g4x.gif"
                      title="VideoTaskManager2"
                      className="btn btn-primary"
                    >
                      GIF 2
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="slide">
                <div className="leftCol">
                  <img
                    className="d-block w-100"
                    src="https://i.makeagif.com/media/5-05-2020/USiuyb.gif"
                    alt="Fifth slide"
                  />
                </div>
                <div className="rightCol">
                  <h5 className="projHeader">Weight Tracker</h5>
                  <h6 className="">
                    JavaScript || Node.js || Material Design || Chart.js || REST
                    API
                  </h6>
                  <p>
                    I built this mobile feature for BuildFire's platform. It
                    allows users to log their daily progress towards a goal
                    weight. Chart.js plots the linear path to their goal as well
                    as a line that shows their actual progress. Local
                    notifications monitor users' activity to fire off reminders
                    if they are inactive and not logging their stats. Users can
                    upload images or take images for each log as a visual
                    representation of their progress. It is in production in
                    BuildFire's marketplace.
                  </p>
                  <div className="flexRow">
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      href="https://i.makeagif.com/media/5-05-2020/kxY7Ty.gif"
                      // href="https://i.makeagif.com/media/5-05-2020/USiuyb.gif"
                      title="WeightTracker1"
                      className="btn btn-primary"
                    >
                      GIF 1
                    </a>
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      href="https://i.makeagif.com/media/5-05-2020/SnNl8l.gif"
                      title="VideoTaskManager2"
                      className="btn btn-primary"
                    >
                      GIF 2
                    </a>
                    <a
                      target="_blank"
                      style={{marginRight: "1em"}}
                      href="https://i.makeagif.com/media/5-05-2020/i_VIwN.gif"
                      title="VideoTaskManager2"
                      className="btn btn-primary"
                    >
                      GIF 3
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    );
  }
}
export default MyCarousel;
