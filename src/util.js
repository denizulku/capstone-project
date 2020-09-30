export function displayToday() {
  const today = new Date()
  return (
    today.toLocaleString('default', { month: 'long' }) +
    ' ' +
    today.getDate() +
    ' ' +
    today.getFullYear()
  )
}
