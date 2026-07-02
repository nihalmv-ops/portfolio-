import "./Navbar.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="header">

      <div className="logo">
        Nihal.
      </div>

      <nav className="navbar">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </nav>

      <div className="social-icons">

        <FaGithub />

        <FaLinkedin />

      </div>

      <button className="menu-btn">

        <FaBars />

      </button>

    </header>
  );
}

export default Navbar;