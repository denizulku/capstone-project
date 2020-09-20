import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form/Form'
import List from './components/List/List'
import Calendar from './components/Calendar/Calendar'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import HandleHabits from './HandleHabits.js'
import { v4 as uuid } from 'uuid'

function App() {
  const { addHabit, toggleCompleted, removeHabit } = HandleHabits()

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <List
              onItemClick={toggleCompleted}
              headline={'Dashboard'}
              onDelete={removeHabit}
            />
          </Route>
          <Route path="/create">
            <Form onSubmit={addHabit} headline={'Create a habit'} />
          </Route>
          <Route path="/overview">
            <Calendar headline={'Your monthly overview'} />
          </Route>
        </Switch>
      </main>
      <Navigation />
    </Router>
  )
}

export default App
