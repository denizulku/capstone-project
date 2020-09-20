import { useState } from 'react'
import React from 'react'

export default function HandleHabits() {
  const [habits, setHabits] = useState([])

  function addHabit(newHabit) {
    setHabits([...habits, newHabit])
  }

  function toggleCompleted(id) {
    const index = habits.findIndex((habit) => habit.id === id)
    const habit = habits[index]
    const before = habits.slice(0, index)
    const after = habits.slice(index + 1)
    const updatedHabit = { ...habit, completed: !habit.completed }
    setHabits([...before, updatedHabit, ...after])
  }

  function removeHabit(id) {
    const index = habits.findIndex((habit) => habit.id === id)
    setHabits([...habits.slice(0, index), ...habits.slice(index + 1)])
  }
  return {
    addHabit,
    toggleCompleted,
    removeHabit,
  }
}
