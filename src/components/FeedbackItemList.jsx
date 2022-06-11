import React from "react";
import FeedbackItem from "../components/FeedbackItem";
import PropTypes from "prop-types";

const FeedbackItemList = ({ feedback, deleteHandler }) => {
  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};

FeedbackItemList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackItemList;
