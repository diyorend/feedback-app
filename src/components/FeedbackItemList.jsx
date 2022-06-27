import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "../components/FeedbackItem";

const FeedbackItemList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  }
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackItemList;
