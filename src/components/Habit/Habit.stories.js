import React from 'react'
import HabitItem from './HabitItem'

export default {
  title: 'HabitItem',
  component: Item,
}
export const HabitItem = () => {
  return (
    <label className="Habit">
      {text}
      <input checked={completed} type="checkbox" />
    </label>
  )
}
