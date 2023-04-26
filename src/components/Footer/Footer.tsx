import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hello" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed by{" "}
          <a href="https://github.com/mzk622" target="_blank" rel="noopener noreferrer">
            Mizuki Sango
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
