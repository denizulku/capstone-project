import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import List from './components/List/List'
import Navigation from './Navigation'
import { v4 as uuid } from 'uuid'

function App() {
  const [habits, setHabits] = useState([])
  return (
    <div className="App">
      <Router>
        <Form habits={habits} onSubmit={addHabit} />
        <List habits={habits} onItemClick={toggleCompleted} />
        <Navigation />
      </Router>
    </div>
  )

  function addHabit(name) {
    setHabits([...habits, { name, completed: false, id: uuid() }])
  }
  function toggleCompleted(id) {
    const index = habits.findIndex((habit) => habit.id === id)
    const habit = habits[index]
    const before = habits.slice(0, index)
    const after = habits.slice(index + 1)
    const updatedHabit = { ...habit, completed: !habit.completed }
    setHabits([...before, updatedHabit, ...after])
  }
}

export default App
