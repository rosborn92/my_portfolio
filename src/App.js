import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import MyNav from "./MyNav";
import Projects from "./Projects";
import Toolbox from "./Toolbox";
import Contact from "./Contact";
import Carousel from "./Carousel/Carousel";

import "./style.css";

const carouselSlidesData = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook"
  },
  {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App bg-secondary p-5">
        <MyNav />
        <Home />
        <Toolbox />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
