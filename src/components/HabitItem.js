import React from 'react'

export default function Habit({ text, completed }) {
  return (
    <label className="Habit">
      {text}
      <input checked={completed} type="checkbox" />
    </label>
  )
}
