import React from "react";
import { Fade } from "react-awesome-reveal";
import PropTypes from "prop-types";

const SubTitle = ({ title }: { title: string }) => (
  <h3 className="my-4 text-xl font-semibold text-center">{title}</h3>
);

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;
