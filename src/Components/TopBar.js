import React, { useState } from "react";
import logo from "../Static/logo.png";
import Icon from "@mdi/react";
import { mdiCogs } from "@mdi/js";
import { Link } from "react-router-dom";
import "./styles.css"; // Import the CSS file
import ConnectSection from "./ConnectSection";
export default function navBar(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [connectState, setConnectState] = useState(false);
  const connectHandler = () => {
    setConnectState(!connectState);
  };
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg "
          data-bs-theme="dark"
          style={{ backgroundColor: "black", border: "none" }}
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" height="80" className="justify-content-start" />
            </Link>
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
                  <Link
                    to="/works"
                    className="nav-link d-flex justify-start mx-2 text"
                    aria-current="page"
                  >
                    How its works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link d-flex justify-start mx-2 text">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link d-flex justify-start mx-2 text">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link d-flex justify-start mx-2 text"
                    onClick={connectHandler}
                  >
                    Let's Connect
                  </span>
                </li>
              </ul>
              <ul className="d-flex navbar-nav fw-bold fs-6">
                <li>
                  <Link to="/inprogress" style={{ textDecoration: "none" }}>
                    <button className="btn btn-outline-primary btn-outline-custom mx-2 d-flex justify-start">
                      <Icon path={mdiCogs} size={1} className="primary" />
                      <span className="mx-2">Try Tools for free</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ConnectSection connectState={connectState} closeConnect={connectHandler} />
    </>
  );
}
