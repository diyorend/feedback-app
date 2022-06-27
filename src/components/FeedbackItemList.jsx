import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "../components/FeedbackItem";
import Spinner from "./shared/Spinner";

const FeedbackItemList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return "No Feedback Yet";
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackItemList;
