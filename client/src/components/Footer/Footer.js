import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    Map as MapIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
} from '@mui/icons-material';

const FooterContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#414141',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '50px',
    marginTop: '-150px',
}));

const About = styled('div')({
    lineHeight: '20px',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: 'normal',
    margin: 0,
});

const AboutTitle = styled('span')({
    display: 'block',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '20px',
});

const Icons = styled('div')({
    marginTop: '25px',
});

const Icon = styled(Link)(({ theme }) => ({
    display: 'inline-block',
    width: '35px',
    height: '35px',
    cursor: 'pointer',
    backgroundColor: '#33383b',
    borderRadius: '2px',
    fontSize: '20px',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '35px',
    marginRight: '3px',
    marginBottom: '5px',
}));

const CenterContent = styled('div')({
    display: 'inline-block',
    color: '#ffffff',
    verticalAlign: 'middle',
    margin: 0,
});

const RightContent = styled('div')({
    display: 'block',
    color: '#ffffff',
    margin: '20px 0 12px',
    padding: 0,
});

const RightLink = styled(Link)({
    display: 'inline-block',
    lineHeight: '1.8',
    textDecoration: 'none',
    color: 'inherit',
});

const RightLinkHover = styled(RightLink)({
    color: '#0099ff',
});

const Name = styled('div')({
    color: '#0099ff',
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0,
});

function Footer() {
    return (
        <FooterContainer maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <About>
                        <AboutTitle>About Us</AboutTitle>
                        We're PramaanPatra, revolutionizing certificate management with blockchain. Our mission: secure, transparent certificates for all. Join us in the future of trust. PramaanPatra - Certificates Simplified, Secure.
                    </About>
                    <Icons>
                        <Icon href="/"><Facebook /></Icon>
                        <Icon href="/"><Twitter /></Icon>
                        <Icon href="/"><LinkedIn /></Icon>
                        <Icon href="/"><Instagram /></Icon>
                    </Icons>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div>
                        <Icon><MapIcon /></Icon>
                        <CenterContent>
                            <span> Street name and number</span> City, Country
                        </CenterContent>
                    </div>
                    <div>
                        <Icon><PhoneIcon /></Icon>
                        <CenterContent> (+00) 0000 000 000</CenterContent>
                    </div>
                    <div>
                        <Icon><EmailIcon /></Icon>
                        <CenterContent>
                            <Link href="mailto:office@company.com" style={{ color: '#0099ff', textDecoration: 'none' }}>office@company.com</Link>
                        </CenterContent>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src='/images/Logo-bg-black.png' alt='PramaanPatra' />
                    <RightContent>
                        <RightLink href="/">Solutions</RightLink> |
                        <RightLink href="/">Industries</RightLink> |
                        <RightLink href="/">Pricing</RightLink> |
                        <RightLink href="/">Resources</RightLink> |
                        <RightLink href="/">Marketplace</RightLink>
                    </RightContent>
                    <Name>PramaanPatra &copy; 2023</Name>
                </Grid>
            </Grid>
        </FooterContainer>
    );
}

export default Footer;
