import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './components/Form/Form'
import List from './components/List/List'

function App() {
  const [habits, setHabits] = useState([])
  return (
    <div className="App">
      <header></header>
      <Form habits={habits} onSubmit={addHabit} />
      <List habits={habits} />
    </div>
  )

  function addHabit(text) {
    setHabits([text, ...habits])
  }
}

export default App
