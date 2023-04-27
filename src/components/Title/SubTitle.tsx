import React from "react";
import { Fade } from "react-awesome-reveal";
import PropTypes from "prop-types";

const SubTitle = ({ title }: { title: string }) => (
  <h3 className="my-4 font-semibold text-center text-xl md:text-3xl lg:text-4xl">{title}</h3>
);

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;
