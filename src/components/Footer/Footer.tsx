import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white md:flex md:justify-center pt-12 pb-8">
      <div className="md:w-1/2 mx-4">
        Copyright © {new Date().getFullYear()} - Developed by{" "}
        <a href="https://github.com/mzk622" target="_blank">
          Mizuki Sango
        </a>
      </div>
    </footer>
  );
};

export default Footer;
