import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <p class="about">
                    <span> About the company</span>
                    We're [Project Name], revolutionizing certificate management with blockchain. Our mission: secure, transparent certificates for all. Join us in the future of trust.
                    [Project Name] - Certificates Simplified, Secure.
                </p>
                <div class="icons">
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span> Street name and number</span> City, Country</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p> (+00) 0000 000 000</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="/"> office@company.com</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h2> Project <span> logo</span></h2>
                <p class="menu">
                    <a href="/"> Solutions</a> |
                    <a href="/"> Industries</a> |
                    <a href="/"> Pricing</a> |
                    <a href="/"> Resources</a> |
                    <a href="/"> Marketplace</a>
                </p>
                <p class="name"> Project Name &copy; 2023</p>
            </div>
        </footer>
    )
}

export default Footer