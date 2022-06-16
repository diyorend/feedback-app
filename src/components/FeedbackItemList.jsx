import React from "react";
import FeedbackItem from "../components/FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

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
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackItemList;
