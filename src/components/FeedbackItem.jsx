import React from "react";
import styled from "styled-components";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, deleteHandler }) => {
  return (
    <Card>
      <Grade>
        <span>{item.rating}</span>
      </Grade>
      <CloseBtn onClick={() => deleteHandler(item.id)}>
        <FaTimes />
      </CloseBtn>
      <div>{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Grade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-30%, -30%);
  background: yellow;
  color: black;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;

  svg {
    color: #c4c402;
  }
`;
export default FeedbackItem;
