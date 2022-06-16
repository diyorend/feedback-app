import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <CardStyled style={reverse ? { background: "#222", color: "#eee" } : {}}>
      {children}
    </CardStyled>
  );
};

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

const CardStyled = styled.div`
  margin-top: 1rem;
  background: #eee;
  color: #222;
  min-height: 15vh;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32rem;
  border-radius: 30px;
  padding: 0.5rem 2rem;
  padding: 1rem 1.6rem;
`;
export default Card;
