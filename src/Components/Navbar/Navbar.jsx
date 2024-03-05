import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul class="nav-bar">
            <div className="logo">
              <h1>
                CARE <span>HELTH</span>{" "}
              </h1>
              <p>PAHRMACY</p>
            </div>
            <input type="checkbox" id="check" />
            <span class="menu">
              <div className="x-mark">
                <label for="check" class="close-menu">
                  <i class="fas fa-times"></i>
                </label>
              </div>

              <li>
                <a id="home" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="#course">Service</a>
              </li>
              <li>
                <a href="#about">Contact Us</a>
              </li>
            </span>
            <label for="check" class="open-menu">
              <i class="fas fa-bars"></i>
            </label>
            <div className="button-header">
              <li>
                <a href="">
                  <button className="button-1">Get In Touch</button>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
