import React from 'react'

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-about">
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                                libero id dolor consectetur tincidunt.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <p>
                                Email: contact@example.com
                                <br />
                                Phone: +1 (123) 456-7890
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <a href="/">
                                <i className="fab fa-facebook" />
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="/">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center">© 2023 Your Website Name</p>
            </div>
        </footer>
    );
}

export default Footer;
