import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutIconLink = () => {
  return (
    <AboutLink>
      <Link to="about">
        <FaQuestion size={30} />
      </Link>
    </AboutLink>
  );
};
const AboutLink = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  a {
    display: flex;
  }
  svg {
    color: #b4b400;
  }
  @media screen and (max-width: 900px) {
    svg {
      width: 15px;
    }
  }
`;

export default AboutIconLink;
