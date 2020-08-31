import React, { useState } from "react";
import styled from "styled-components";
import List from "./List";

export default function Form() {
  //   const [inputValue, setInputValue] = useState();
  const [habits, setHabits] = useState([]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="habit" type="text" placeholder="Insert a habit" />
      </form>
      <List habits={habits} />
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.habit;
    setHabits([...habits, input.value]);
    // setInputValue("");
    form.reset();
  }
}
