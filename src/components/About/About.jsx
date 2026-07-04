import "./About.css";

import aboutImage from "../../assets/nihal photo.jpg.jpeg";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        About Me
      </h2>

      <div className="about-container">

        <div className="about-image">

          <img
            src={aboutImage}
            alt="Nihal MV"
          />

        </div>

        <div className="about-content">

          <h3>
            MERN Stack Developer
          </h3>

          <p>
            I'm Nihal MV from Kerala. I enjoy creating responsive,
            modern and user-friendly websites using the MERN Stack.
            My goal is to become a professional Full Stack Developer
            and build real-world applications.
          </p>

          <div className="skills-list">

            <div className="skill">
              <FaReact />
              <span>React</span>
            </div>

            <div className="skill">
              <FaNodeJs />
              <span>Node.js</span>
            </div>

            <div className="skill">
              <SiExpress />
              <span>Express.js</span>
            </div>

            <div className="skill">
              <SiMongodb />
              <span>MongoDB</span>
            </div>

          </div>

          <button className="resume-btn">
            Download Resume
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;