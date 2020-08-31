import React, { useState } from "react";
import styled from "styled-components";

export default function List({ habits }) {
  return (
    <section>
      {habits.map((habit) => (
        <div>{habit}</div>
      ))}
    </section>
  );
}
