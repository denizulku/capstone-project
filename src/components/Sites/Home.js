import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import List from '../List/List'

export default function Home({ habits, toggleCompleted }) {
  return (
    <>
      <h1>Create Habit</h1>
      <Form />
      <List habits={habits} onItemClick={toggleCompleted} />
    </>
  )
}
