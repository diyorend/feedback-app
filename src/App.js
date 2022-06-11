import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackItemList from "./components/FeedbackItemList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <div>
      <Header />
      <FeedbackStats feedback={feedback} />
      <FeedbackItemList deleteHandler={deleteFeedback} feedback={feedback} />
    </div>
  );
};

export default App;
