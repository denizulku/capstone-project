import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import List from './components/List/List'
import Calendar from './components/Calendar/Calendar'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import { v4 as uuid } from 'uuid'

function App() {
  const [habits, setHabits] = useState([])

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <List
              habits={habits}
              onItemClick={toggleCompleted}
              headline={'Dashboard'}
            />
          </Route>
          <Route path="/create">
            <Form
              habits={habits}
              onSubmit={addHabit}
              headline={'Create a habit'}
            />
          </Route>
          <Route path="/overview">
            <Calendar headline={'Your monthly overview'} />
          </Route>
        </Switch>
      </main>
      <Navigation />
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
