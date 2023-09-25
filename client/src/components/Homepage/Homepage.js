import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero-txt">
                  <p>
                    Your <span>Certificates</span>, Our <span>Assurance</span>,
                    Welcome to the <span>Future</span>
                  </p>
                </div>
                <div className="hero-btn">
                  <a href="#create-certificate" className="btn btn-primary">
                    Get Certified
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero-img">
                  <img
                    src="/images/hero-img.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section" id="create-certificate">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about-1">
                  <div className="about-txt">
                    <h2>Birth Certificates</h2>
                    <p>Create your Birth Certificate here</p>
                    <div className="about-btn1">
                      <button
                        onClick={() => navigate("/create-birth-certificate")}
                        className="btn btn-primary"
                      >
                        Birth Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-img1">
                  <img
                    src="/images/about-img1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="about-img2">
                  <img
                    src="/images/about-img2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-2">
                  <div className="about-txt">
                    <h2>Degree Certificates</h2>
                    <p>Create your Degree Certificate here</p>
                    <div className="about-btn2">
                      <button
                        onClick={() =>
                          navigate("/create-graduation-certificate")
                        }
                        className="btn btn-primary"
                      >
                        Degree Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="about-3">
                  <div className="about-txt">
                    <h2>Property Certificates</h2>
                    <p>Create your Property Certificate here</p>
                    <div className="about-btn3">
                      <a href="/" className="btn btn-primary">
                        Property Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-img3">
                  <img
                    src="/images/about-img3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
