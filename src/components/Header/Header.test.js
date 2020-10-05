import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

test('renders correctly', () => {
  expect(Header).toMatchSnapshot()
})
