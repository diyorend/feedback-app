import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const Header = ({ text }) => {
  return (
    <HeaderStyled>
      <h2>Feedback UI</h2>
    </HeaderStyled>
  );
};
// Header.defaultProps = {
//   text: "Salom social media",
// };
// Header.propTypes = {
//   text: PropTypes.string.isRequired,
// };

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #c3db07;
  h2 {
    font-size: 3rem;
    font-weight: 400;
    padding: 1rem;
  }
`;
export default Header;
