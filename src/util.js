export function displayToday() {
  const today = new Date()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date =
    months[today.getMonth()] + ' ' + today.getDate() + ' ' + today.getFullYear()
  return date
}
