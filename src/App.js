import React, { useState } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'
import { v4 as uuid } from 'uuid'

function App() {
  const [habits, setHabits] = useState([])
  return (
    <div className="App">
      <Form habits={habits} onSubmit={addHabit} />
      <List
        displayToday={displayToday}
        habits={habits}
        onItemClick={toggleCompleted}
      />
    </div>
  )

  function displayToday() {
    const today = new Date()
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const date =
      today.getDate() +
      ' ' +
      months[today.getMonth()] +
      ' ' +
      today.getFullYear()
    return date
  }

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
