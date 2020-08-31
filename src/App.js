import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
