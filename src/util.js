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
    today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()
  return date
}
