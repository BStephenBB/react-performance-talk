import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  &:not(:checked) > input {
    position: absolute;
    top: -9999px;
    visibility: hidden;
  }

  &:not(:checked) > label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 20px;
    color: #ddd;
  }

  &:not(:checked) > label:before {
    content: "★";
  }

  & > input:checked ~ label {
    color: #ffea00;
  }

  &:not(:checked) > label:hover,
  &:not(:checked) > label:hover ~ label {
    color: #ffea00;
    text-shadow: 0 0 4px #ffea00;
  }

  & > input:checked + label:hover,
  & > input:checked + label:hover ~ label,
  & > input:checked ~ label:hover,
  & > input:checked ~ label:hover ~ label,
  & > label:hover ~ input:checked ~ label {
    color: #ffea00;
  }

  &:not(:checked) > label:active {
    transition: transform 0.1s ease;
    position: relative;
    transform: translateY(2px);
  }
`;

export const Rating = ({ id, rating, name, setRating }) => {
  const handler = e => {
    setRating(id, e.target.value);
  };

  return (
    <Wrapper>
      <input
        checked={rating === "1"}
        onChange={handler}
        type="radio"
        id={`${name}_star1`}
        name={name}
        value="1"
      />
      <label htmlFor={`${name}_star1`} title="Very Poor">
        1 star
      </label>
      <input
        checked={rating === "2"}
        onChange={handler}
        type="radio"
        id={`${name}_star2`}
        name={name}
        value="2"
      />
      <label htmlFor={`${name}_star2`} title="Poor">
        2 stars
      </label>
      <input
        checked={rating === "3"}
        onChange={handler}
        type="radio"
        id={`${name}_star3`}
        name={name}
        value="3"
      />
      <label htmlFor={`${name}_star3`} title="Good">
        3 stars
      </label>
      <input
        checked={rating === "4"}
        onChange={handler}
        type="radio"
        id={`${name}_star4`}
        name={name}
        value="4"
      />
      <label htmlFor={`${name}_star4`} title="Very Good">
        4 stars
      </label>
      <input
        checked={rating === "5"}
        onChange={handler}
        type="radio"
        id={`${name}_star5`}
        name={name}
        value="5"
      />
      <label htmlFor={`${name}_star5`} title="Outstanding">
        5 stars
      </label>
    </Wrapper>
  );
};
