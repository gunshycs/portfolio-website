import { useState, useEffect, useRef } from "react";
import csPicture from "./assets/senior.jpg";
import me from './assets/me.png'
import bgImage from "./assets/bg.jpg";
import Slider from "react-slick";
import yummy from "./assets/yummy.png";
import cg from "./assets/cg.png";
import cg2 from "./assets/cg2.png";
import cg3 from "./assets/cg3.png";
import cg4 from "./assets/cg4.png";
import logo from "./assets/logo.png";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const projectContainerRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (projectContainerRef.current) {
      observer.observe(projectContainerRef.current);
    }

    return () => {
      if (projectContainerRef.current) {
        observer.unobserve(projectContainerRef.current);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsContainer = projectContainerRef.current;
    if (projectsContainer) {
      const startY = window.pageYOffset;
      const targetY =
        projectsContainer.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetY - startY;
      const duration = 100; // Adjust duration as needed

      let start;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeContainer = aboutMeRef.current;
    if (aboutMeContainer) {
      const startY = window.pageYOffset;
      const targetY =
        aboutMeContainer.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetY - startY;
      const duration = 100; // Adjust duration as needed

      let start;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="superContainer">
      <header className="headerContainer">
        <nav className="navBar header">
          <ul className="navbarItems">
            <li className="homeItem">
              <a href="/" className="navItem-home">
                <img className='logoImage'src={logo} alt="Christian Sanchez" /> Christian Sanchez
              </a>
            </li>
            <li className="item">
              <a
                href="https://drive.google.com/file/d/1x1bz8TaaXb-jjb7T9f5ZVmSw1h3ufAGf/view?usp=sharing"
                target="_blank"
                className="navItem"
              >
                Resume
              </a>
            </li>
            <li className="item">
              <a
                href="#projects"
                className="navItem"
                onClick={scrollToProjects}
              >
                Projects
              </a>
            </li>
            <li className="item">
              <a href="#aboutMe" className="navItem" onClick={scrollToAboutMe}>
                About Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="bodyContainer">
        <div className="heroSection">
          <div className="heroContainer">
            <img className="heroImage" src={csPicture} alt="hero"></img>
          </div>
          <div className="aboutContainer">
            <h1>Hey there!</h1>
            <h5>
              I'm Christian Sanchez a new grad passionate to learn and obtain
              experience!
            </h5>
          </div>
        </div>
        <div className="connectionContainer">
          <div className="socialContainer">
            <a
              className="vectorIconsRef"
              href="https://github.com/gunshycs"
              target="_blank"
            >
              <ion-icon name="logo-github" className="vectorIcons"></ion-icon>
            </a>
            <a
              className="vectorIconsRef"
              href="https://www.linkedin.com/in/christian-sanchez-1b2889210/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin" className="vectorIcons"></ion-icon>
            </a>
            <a
              className="vectorIconsRef"
              href="mailto:christiansanchez1258@gmail.com"
              target="_blank"
            >
              <ion-icon name="mail" className="vectorIcons"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div id="aboutMe" className="aboutMeContainer" ref={aboutMeRef}>
        <h1 className="sectionText">About Me</h1>
        <div className="aboutMeTextContainer">
          <h2>
            Graduated at the California State University of Fullerton with a
            Bachelor's in Computer Science. I currently enjoy reading data
            science and machine learning books and exploring more into Web
            Development!
          </h2>
          <h2 className="sectionText">Technical Skills</h2>
          <div className="techStackContainer">
            <i className="techStackIcons" class="devicon-cplusplus-plain"></i>

            <i className="techStackIcons" class="devicon-javascript-plain"></i>

            <i className="techStackIcons" class="devicon-python-plain"></i>

            <i className="techStackIcons" class="devicon-react-original"></i>

            <i className="techStackIcons" class="devicon-csharp-plain"></i>

            <i className="techStackIcons" class="devicon-html5-plain"></i>

            <i className="techStackIcons" class="devicon-css3-plain"></i>

            <i className="techStackIcons" class="devicon-mongodb-plain"></i>

            <i
              className="techStackIcons"
              class="devicon-amazonwebservices-plain-wordmark"
            ></i>

            <i
              className="techStackIcons"
              class="devicon-unrealengine-original"
            ></i>

            <i class="devicon-unity-plain"></i>
          </div>
        </div>
      </div>
      <h1 id="projects" className="sectionText" ref={projectContainerRef}>
        Projects
      </h1>
      <div className="contentContainer">
        <div className="projectsContainer">
          <div
            className={`projectContainer fade-in ${isVisible ? "visible" : ""}`}
            ref={projectContainerRef}
          >
            {/* Project content */}
            <h2 className="projectName">CardGen</h2>
            <div className="projectDescriptionContainer">
              <img className="projectImagecg" src={cg} alt="project" />
              <img className="projectImagecg" src={cg2} alt="project" />
              <img className="projectImagecg" src={cg3} alt="project" />
              <img className="projectImagecg" src={cg4} alt="project" />
              <div className="projectDescriptionTextContainer">
                <h3 className="projectDescriptionText">
                  Communicated in a team of two to develop an application,
                  overseeing project management duties such as roadmap
                  formulation, backlog assembly, prototype modeling, and feature
                  prioritization
                </h3>
                <h3 className="projectDescriptionText">
                  {" "}
                  Developed an engaging front-end interface to seamlessly
                  integrate with back-end systems, to ensure improved user
                  engagement and interaction
                </h3>
                <h3 className="projectDescriptionText">
                  Architected the design and development of OCR features,
                  integrating image processing algorithms with backend services
                  for real-time text extraction for a seamless user experience
                </h3>
              </div>
            </div>
          </div>
          <div className="projectContainer fade-in">
            <h2 className="projectName">Yummy</h2>
            <div className="projectDescriptionContainer">
              <img className="projectImage" src={yummy} alt="project" />
              <div className="projectDescriptionTextContainer">
                <h3 className="projectDescriptionText">
                  Collaborated cross-functionally with a team of 5 members to
                  construct a website over the span of 3 months
                </h3>
                <h3 className="projectDescriptionText">
                  {" "}
                  Designated scrum master of the group with responsibility for
                  daily scrums, coordinated in-person or remote meetups twice a
                  week and formulated a working schedule for all members
                </h3>
                <h3 className="projectDescriptionText">
                  Leveraged expertise in HTML, CSS, and JavaScript to implement
                  responsive design principles and optimize user experience
                  across various devices and screen sizes
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
