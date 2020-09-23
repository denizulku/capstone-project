import { useState, useEffect } from 'react'

export default function useHabits() {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem('habits')) || []
  )

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits))
  }, [habits])

  function addHabit(newHabit) {
    setHabits([...habits, newHabit])
  }

  function toggleCompleted(id) {
    const index = habits.findIndex((habit) => habit.id === id)
    const habit = habits[index]
    const before = habits.slice(0, index)
    const after = habits.slice(index + 1)
    const completedDates = habit.completedDates || []
    const currentDate = new Date().toDateString()
    const currentDateIndex = completedDates.indexOf(currentDate)
    const habitChecked = currentDateIndex === -1

    if (habitChecked) {
      completedDates.push(currentDate)
    } else {
      completedDates.splice(currentDateIndex, 1)
    }

    const updatedHabit = {
      ...habit,

      completedDates: completedDates,
    }

    setHabits([...before, updatedHabit, ...after])
  }

  function removeHabit(id) {
    const index = habits.findIndex((habit) => habit.id === id)
    setHabits([...habits.slice(0, index), ...habits.slice(index + 1)])
  }
  return {
    habits,
    addHabit,
    toggleCompleted,
    removeHabit,
  }
}
