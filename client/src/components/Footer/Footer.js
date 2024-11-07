import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Map as MapIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

const FooterContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#2b2b2b",
  padding: "50px 20px",
  marginTop: "-100px",
  color: "#ffffff",
}));

const About = styled("div")({
  lineHeight: "24px",
  fontSize: "15px",
  marginBottom: "20px",
});

const AboutTitle = styled("h2")({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "15px",
});

const Icons = styled("div")({
  marginTop: "20px",
  display: "flex",
  gap: "10px",
});

const Icon = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  backgroundColor: "#414141",
  color: "#ffffff",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#0099ff",
    transform: "scale(1.1)",
  },
}));

const ContactItem = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

const CenterContent = styled(Typography)({
  marginLeft: "10px",
});

const RightContent = styled("div")({
  marginTop: "15px",
  lineHeight: "2",
});

const RightLink = styled(Link)({
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: "#0099ff",
  },
});

const LogoImage = styled("img")({
  marginBottom: "15px",
  width: "150px",
});

function Footer() {
  return (
    <FooterContainer maxWidth="xl">
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <About>
            <AboutTitle>About Us</AboutTitle>
            PramaanPatra is revolutionizing certificate management with
            blockchain. Join us in the future of secure, transparent
            certifications.
          </About>
          <Icons>
            <Icon href="/" aria-label="Facebook">
              <Facebook />
            </Icon>
            <Icon href="/" aria-label="Twitter">
              <Twitter />
            </Icon>
            <Icon href="/" aria-label="LinkedIn">
              <LinkedIn />
            </Icon>
            <Icon href="/" aria-label="Instagram">
              <Instagram />
            </Icon>
          </Icons>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={4}>
          <ContactItem>
            <Icon>
              <MapIcon />
            </Icon>
            <CenterContent>123 Street, City, Country</CenterContent>
          </ContactItem>
          <ContactItem>
            <Icon>
              <PhoneIcon />
            </Icon>
            <CenterContent>(+00) 0000 000 000</CenterContent>
          </ContactItem>
          <ContactItem>
            <Icon>
              <EmailIcon />
            </Icon>
            <CenterContent>
              <Link
                href="mailto:office@company.com"
                color="#0099ff"
                underline="hover"
              >
                office@company.com
              </Link>
            </CenterContent>
          </ContactItem>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
          <LogoImage src="/images/Logo-bg-black.png" alt="PramaanPatra Logo" />
          <RightContent>
            <RightLink href="/">Solutions</RightLink> |
            <RightLink href="/">Industries</RightLink> |
            <RightLink href="/">Pricing</RightLink> |
            <RightLink href="/">Resources</RightLink> |
            <RightLink href="/">Marketplace</RightLink>
          </RightContent>
          <Typography
            variant="body2"
            color="#0099ff"
            style={{ marginTop: "10px" }}
          >
            PramaanPatra &copy; 2023
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}

export default Footer;
