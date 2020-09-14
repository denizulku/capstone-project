import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import List from './components/List/List'
import Calendar from './components/Calendar/Calendar'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Home from './components/Sites/Home'
import MonthlyOverview from './components/Sites/Overview'
import { v4 as uuid } from 'uuid'

function App() {
  const [habits, setHabits] = useState([])
  const [currentPage, setCurrentPage] = useState('')
  return (
    <Router>
      <div className="App">
        <Header title={currentPage} />
        <Switch>
          <Route exact path="/">
            <h2>Welcome!</h2>
          </Route>
          <Route path="/create">
            <Form habits={habits} onSubmit={addHabit} />
            <List habits={habits} onItemClick={toggleCompleted} />
          </Route>
          <Route path="/overview">
            <h2>Your monthly overview</h2>
            <Calendar />
          </Route>
        </Switch>
        <Navigation onNavigate={setCurrentPage} />
      </div>
    </Router>
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
