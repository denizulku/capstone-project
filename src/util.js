export function displayToday() {
  const today = new Date()
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date =
    weekday[today.getDay()] +
    ' ' +
    months[today.getMonth()] +
    ' ' +
    today.getDate() +
    ' ' +
    today.getFullYear()
  return date
}
