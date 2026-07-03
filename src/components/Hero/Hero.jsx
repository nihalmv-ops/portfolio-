import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

  

        <p className="greeting">
          Hello, I'm
        </p>

        <h1>
          Nihal MV
        </h1>

        <h2>
          MERN Stack Developer
        </h2>

        <p className="description">
          I build modern, responsive and user-friendly web applications using the MERN Stack.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Hire Me
          </button>

          <button className="btn-secondary">
            Download CV
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/nihal photo.jpg.jpeg"
          alt="Nihal"
        />

      </div>

           <div className="social-icons">

  <a
    href="https://github.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

</div>

<div className="scroll-down">
  ↓ Scroll Down
</div>



    </section>
    
  );
}

export default Hero;