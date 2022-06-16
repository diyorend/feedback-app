import React, { useState } from "react";
import Card from "./shared/Card";
import styled from "styled-components";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ addHandler }) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const textChangeHandler = (e) => {
    if (text === "" || text == null) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      addHandler(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <InputGroup>
          <input
            onChange={textChangeHandler}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </InputGroup>
        {message && <Message>{message}</Message>}
      </form>
    </Card>
  );
};

const InputGroup = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  position: relative;
  input {
    width: 100%;
    outline: none;
    border: 1px solid gray;
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-family: "Poppins";
    color: #2f2f2f;
  }
  button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;
const Message = styled.div`
  font-size: 0.9rem;
  color: red;
`;
export default FeedbackForm;
