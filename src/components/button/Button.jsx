import React from "react";
import './Button.scss'
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutLineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </Button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};

export default Button;
