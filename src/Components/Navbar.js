import React from "react";
import './Navbar.css';
class Navbar extends React.Component {
  render() {
    return (
      <div>
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "20px", maxWidth: "94%" }}>
        <nav class="navbar navbar-expand-lg navbar-trans navbar-inverse navbar-dark">
        
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <br/>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/"
                  style={{
                    fontSize:"14px",
                    fontWeight:"900",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/"
                  style={{
                    fontSize:"14px",
                    fontWeight:"900",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Resources
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/"
                  style={{
                    fontSize:"14px",
                    fontWeight:"900",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Tour
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/"
                  style={{
                    fontSize:"14px",
                    fontWeight:"900",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/"
                  style={{
                    fontSize:"14px",
                    fontWeight:"900",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Pricing
                </a>
              </li>

              <li class="nav-item active">
                <a
                  class="nav-link navh"
                  href="#/"
                  style={{
                    fontSize:"14px",
                    fontWeight:"900",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Book Now
                </a>
              </li>

              
              
              <li class="nav-item">
                <a class="nav-link" href="#/">
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
    );
  }
}
export default Navbar;
