import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <Card>
      <AboutStyled>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <div>
          <p>Version: 1.0.0</p>
          <Link to="/">Back to Home</Link>
        </div>
      </AboutStyled>
    </Card>
  );
};
const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    padding: 0.5rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 0;
  }
  a {
    text-decoration: none;
    color: yellow;
    display: flex;
    background: #000;
    padding: 0.5rem;
    border-radius: 10px;
  }
`;

export default About;
