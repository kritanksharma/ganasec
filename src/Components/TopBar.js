import React from "react";
import logo from "../Static/logo3.png";
import Icon from "@mdi/react";
import { mdiCogs} from "@mdi/js";
import "./styles.css"; // Import the CSS file
export default function navBar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        data-bs-theme="dark"
        style={{ backgroundColor: "black", border: "none" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="80"
              height="80"
              className="justify-content-start"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-6">
              <li className="nav-item">
                <a className="nav-link d-flex justify-start mx-2 " aria-current="page" href="/">
                 How its works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex justify-start mx-2 " href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex justify-start mx-2 " href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex justify-start mx-2 " href="/contact">
                  Let's Connect
                </a>
              </li>
            </ul>
           <ul className="d-flex navbar-nav fw-bold fs-6">
            <li>
            <button className="btn btn-outline-primary  btn-outline-custom mx-2 d-flex justify-start" href="#contact">
            <Icon path={mdiCogs} size={1} className="primary"/>
          <span className="mx-2">Try Tools for free</span>
            </button>
            </li>
           </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
