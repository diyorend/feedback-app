import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import styled from "styled-components";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  const changeHandler = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };
  const ratingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Ul>
      {ratingArr.map((item) => (
        <li key={item}>
          <input
            type="radio"
            id={`num${item}`}
            name="rating"
            value={item}
            onChange={changeHandler}
            checked={selected === item}
          />
          <label htmlFor={`num${item}`}>{item}</label>
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  min-height: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid yellow;

    &:hover {
      background: yellow;
      color: #000;
    }
    input {
      width: 100%;
      height: 100%;
      display: inline-block;
      cursor: pointer;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &:checked ~ label {
        background: yellow;
        color: #000;
      }
    }
    label {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }
`;

export default RatingSelect;
