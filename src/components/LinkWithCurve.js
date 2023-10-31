import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import curve from "../public/beanshape.png";

const LinkWithCurve = ({ to, name }) => {
  const [isActive, setIsActive] = useState(false);
  //const [isCurrent, setIsCurrent] = useState(false);
  const location = useLocation();
  const isCurrent = location.pathname === to;

  return (
    <Link
      className={`flex relative flex-col link-text text-lg ${
        isActive || isCurrent ? "text-primary" : ""
      }`}
      to={to}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {name}{" "}
      {(isActive || isCurrent) && (
        <img src={curve} alt="curve" className="absolute w-40 h-10 top-4" />
      )}
    </Link>
  );
};

LinkWithCurve.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default LinkWithCurve;
