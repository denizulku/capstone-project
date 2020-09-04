import React from 'react'
import PropTypes from 'prop-types'

export default function Habit({ text, completed }) {
  return (
    <label className="Habit">
      {text}
      <input checked={completed} type="checkbox" />
    </label>
  )
}
