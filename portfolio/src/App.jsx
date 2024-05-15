import { useState } from "react";
import reactLogo from "./assets/react.svg";
import csPicture from "./assets/senior.jpg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="superContainer">
        <div className="headerContainer">
          <nav className="navBar header">
            <ul className="navbarItems">
              <li className="homeItem">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="resume">Resume</a>
              </li>
              <li>
                <a href="projects">Projects</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bodyContainer">
          <div className="heroContainer">
            <img className="heroImage" src={csPicture}></img>
          </div>
          <div className="aboutContainer">
            <h1>Hey there!</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              repellat veniam nobis possimus, reiciendis veritatis quia commodi
              labore ipsum aut et necessitatibus at nulla neque natus nam
              excepturi, aperiam qui!
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
