import React from 'react';
import './Homepage.css'

function Homepage() {
    return (
        <>
            <main>
                <section className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-txt">
                                    <p className="display-4">
                                        Your <span className="text-success">Certificates</span>, Our <span className="text-success">Assurance</span>,
                                        Welcome to the <span className="text-success">Future</span>
                                    </p>
                                </div>
                                <div className="hero-btn mt-4">
                                    <a href="http://" className="btn btn-success btn-lg">
                                        Get Certified
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-img">
                                    <img src="/images/hero-img.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-1 mt-5">
                                    <div className="about-txt p-4">
                                        <h2>Birth Certificates</h2>
                                        <p>Create your Birth Certificate here</p>
                                        <div className="about-btn1 mt-3">
                                            <a href="/components/BirthCertificate" className="btn btn-success">
                                                Birth Certificate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img1">
                                    <img src="/images/about-img1.png" alt="" className="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-img2">
                                    <img src="/images/about-img2.png" alt="" className="img-fluid rounded" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-2 mt-5">
                                    <div className="about-txt p-4">
                                        <h2>Degree Certificates</h2>
                                        <p>Create your Degree Certificate here</p>
                                        <div className="about-btn2 mt-3">
                                            <a href="/" className="btn btn-success">
                                                Degree Certificate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-3 mt-5">
                                    <div className="about-txt p-4">
                                        <h2>Property Certificates</h2>
                                        <p>Create your Property Certificate here</p>
                                        <div className="about-btn3 mt-3">
                                            <a href="/" className="btn btn-success">
                                                Property Certificate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img3">
                                    <img src="/images/about-img3.png" alt="" className="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage;
