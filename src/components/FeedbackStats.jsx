import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
