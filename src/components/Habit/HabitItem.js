import React from 'react'

export default function Habit({ name, completed, id, onItemClick }) {
  return (
    <label className="Habit">
      {name}
      <input
        onChange={() => onItemClick(id)}
        checked={completed}
        type="checkbox"
      />
    </label>
  )
}
