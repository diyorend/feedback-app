import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <BtnStyled
      type={type}
      disabled={isDisabled}
      style={isDisabled ? { opacity: 0.8 } : {}}
    >
      {children}
    </BtnStyled>
  );
};

const BtnStyled = styled.button`
  background: #2f2f2f;
  color: yellow;
  padding: 0.2rem 0.7rem;
  font-family: "Poppins";
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

Button.defaultProps = {
  type: "button",
  isDisabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
