import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import List from './components/List/List'
import Navigation from './components/Navigation/Navigation'
import { v4 as uuid } from 'uuid'

function App() {
  const [habits, setHabits] = useState([])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <p>Click '+' to create a new habit</p>
            <List habits={habits} onItemClick={toggleCompleted} />
          </Route>
          <Route path="/create">
            <Form habits={habits} onSubmit={addHabit} />
          </Route>
          <Route path="/overview">
            <h2>Calendar</h2>
          </Route>
        </Switch>
        <Navigation />
      </div>
    </Router>
  )

  function addHabit(name, color) {
    setHabits([...habits, { name, completed: false, color: color, id: uuid() }])
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
