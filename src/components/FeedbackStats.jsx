import React, { useContext } from "react";
import styled from "styled-components";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  //calculate avg
  let average = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <Stats>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </Stats>
  );
};

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0.5rem 0;
`;

export default FeedbackStats;
