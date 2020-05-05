import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import MyNav from "./MyNav";
import Projects from "./Projects";
import Toolbox from "./Toolbox";
import Contact from "./Contact";
import MyCarousel from "./Carousel/Carousel";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNav />
        <Home className="page" style={{paddingTop: "30px"}} />
        <Toolbox className="page" />
        <MyCarousel className="page" />
        <Contact className="page" />
      </div>
    );
  }
}

export default App;
