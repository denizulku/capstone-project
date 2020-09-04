import React from 'react'
import PropTypes from 'prop-types'

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
