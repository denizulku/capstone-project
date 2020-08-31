import React from "react";
import styled from "styled-components";

export default function List({ habits }) {
  return (
    <section>
      {habits.map((habit) => (
        <Habit>{habit}</Habit>
      ))}
    </section>
  );
}

const Habit = styled.div`
  background-color: crimson;
  width: 100px;
`;
