import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [certificatesGenerated, setCertificatesGenerated] = useState(0);
  const [certificatesValidated, setCertificatesValidated] = useState(0);

  const finalTotalVisitors = 1856;
  const finalCertificatesGenerated = 1531;
  const finalCertificatesValidated = 1293;

  useEffect(() => {
    const updateCounter = (current, target, setter) => {
      if (current < target) {
        setTimeout(() => {
          setter(current + 1);
          updateCounter(current + 5, target, setter);
        }, 1);
      }
    };

    updateCounter(0, finalTotalVisitors, setTotalVisitors);
    updateCounter(0, finalCertificatesGenerated, setCertificatesGenerated);
    updateCounter(0, finalCertificatesValidated, setCertificatesValidated);
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        height: "100%",
      }}
    >
      <section className="part-1">
        <div
          className="row"
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 236, 157, 0.3), rgba(0, 196, 243, 0.3))",
            borderRadius: "0 0 400px 0",
            marginTop: "10px",
            height: "450px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: "600",
                padding: "20px 40px",
                lineHeight: "1.4",
                color: "#343a40",
                maxWidth: "500px",
                textAlign: "left",
                marginLeft: "40px",
              }}
            >
              Your <span className="text-success">Certificates</span>, Our{" "}
              <span className="text-success">Assurance</span>, Welcome to the{" "}
              <span className="text-success">Future</span>
            </h2>
            <div style={{ marginTop: "20px", marginLeft: "40px" }}>
              <Link
                to="/create-certificate"
                className="btn btn-success btn-lg"
                style={{
                  padding: "12px 30px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  boxShadow: "0px 4px 15px rgba(0, 196, 243, 0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                Get Certified
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-end"
            style={{
              padding: "0px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/hero-img.png"
              alt="Certification Hero"
              style={{
                maxHeight: "450px",
                borderRadius: "0 0 400px 0",
                transition: "transform 0.3s ease",
                transform: "scale(1.05)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
            />
          </div>
        </div>
      </section>
      <section className="part-2">
        {[
          {
            title: "Birth Certificates",
            description: "Create your Birth Certificate here",
            link: "/create-birth-certificate",
            imgSrc: "/images/about-img1.png",
          },
          {
            title: "Degree Certificates",
            description: "Create your Degree Certificate here",
            link: "/create-degree-certificate",
            imgSrc: "/images/about-img2.png",
          },
          {
            title: "Property Certificates",
            description: "Create your Property Certificate here",
            link: "/create-property-certificate",
            imgSrc: "/images/about-img3.png",
          },
        ].map((item, index) => (
          <div
            className={`row my-4 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            key={item.title}
            style={{
              padding: "40px 20px",
              alignItems: "center",
            }}
          >
            <div className="col-md-6 d-flex justify-content-center">
              <div
                style={{
                  backgroundColor: "rgba(17, 236, 157, 0.16)",
                  borderRadius: "15px",
                  padding: "40px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  width: "400px",
                  height: "200px",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                  {item.description}
                </p>
                <Link to={item.link} className="btn btn-success btn-sm">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={item.imgSrc}
                alt={item.title}
                style={{
                  width: "50%",
                  height: "auto",
                  borderRadius: "15px",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          </div>
        ))}
      </section>
      <section className="part-3">
        <div
          className="row"
          style={{
            background:
              "linear-gradient(135deg, rgba(71, 190, 185, 0.2), rgba(255, 255, 255, 0.8))",
            borderRadius: "50px",
            marginTop: "40px",
            padding: "60px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "20px",
              width: "80%",
              maxWidth: "1200px",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header Section */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "15px",
                }}
              >
                Secure And Validate Your Certificate
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  color: "#777",
                }}
              >
                Protect and authenticate your certificates with ease.
              </p>
            </div>

            {/* Image and Button Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Image Section */}
              <div
                className="col-md-6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 20px",
                }}
              >
                <img
                  src="/images/about-img4.png"
                  alt="Secure and Validate"
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    height: "auto",
                    borderRadius: "15px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 25px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                />
              </div>

              {/* Button Section */}
              <div
                className="col-md-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <div style={{ width: "100%", marginBottom: "20px" }}>
                  <Link
                    to="/secure-certificate"
                    className="btn btn-success btn-lg"
                    style={{
                      padding: "14px 40px",
                      fontSize: "18px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      borderRadius: "50px",
                      width: "100%",
                      transition:
                        "background-color 0.3s ease, transform 0.3s ease",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#28a745";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#34b236";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Secure Certificate
                  </Link>
                </div>
                <div style={{ width: "100%" }}>
                  <Link
                    to="/validate-certificate"
                    className="btn btn-outline-success btn-lg"
                    style={{
                      padding: "14px 40px",
                      fontSize: "18px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      borderRadius: "50px",
                      width: "100%",
                      border: "2px solid #28a745",
                      color: "#28a745",
                      transition:
                        "border-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#34b236";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#28a745";
                      e.currentTarget.style.color = "#28a745";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Validate Certificate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="part-4">
        <div
          className="row"
          style={{
            background: "linear-gradient(135deg, #47beb9 0%, #f9f9f9 100%)",
            borderRadius: "20px",
            marginTop: "40px",
            padding: "40px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="content-container"
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "30px",
              maxWidth: "800px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Header */}
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "15px",
              }}
            >
              Empower Your Future with Us
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: "300",
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Join us in our mission to deliver quality, verified certificates
              that validate your achievements and open doors to new
              opportunities. Experience seamless verification and security like
              never before.
            </p>

            {/* Optional Button Group */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <Link
                to="/join-us"
                className="btn btn-primary btn-lg"
                style={{
                  padding: "14px 30px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#fff",
                  backgroundColor: "#47beb9",
                  borderRadius: "30px",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                Join Us
              </Link>
              <Link
                to="/learn-more"
                className="btn btn-outline-primary btn-lg"
                style={{
                  padding: "14px 30px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#47beb9",
                  backgroundColor: "transparent",
                  borderRadius: "30px",
                  border: "2px solid #47beb9",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="part-5">
        <div
          className="row"
          style={{
            background:
              "linear-gradient(135deg, rgba(17, 236, 157, 0.1), rgba(17, 236, 78, 0.1))",
            borderRadius: "50px",
            height: "350px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "20px",
            padding: "20px",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {[
            { title: "Total Visitors", value: totalVisitors },
            { title: "Certificates Generated", value: certificatesGenerated },
            { title: "Certificates Validated", value: certificatesValidated },
          ].map((item, index) => (
            <div
              key={index}
              className="col-md-3 stat-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                padding: "30px",
                textAlign: "center",
                width: "250px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "rgba(17, 236, 78, 1)",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                {item.value}+
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
