import moment from 'moment'
import renderer from 'react-test-renderer'
import React from 'react'
import Calendar from './Calendar'

it('renders without crashing', () => {
  const props = {
    currentDay: moment('2017-12-26').format('MMM Do YYYY a'),
  }

  const tree = renderer.create(<Calendar {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
