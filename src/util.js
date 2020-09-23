export function displayToday() {
  const today = new Date()
  return (
    today.getDate() +
    ' ' +
    today.toLocaleString('default', { month: 'long' }) +
    ' ' +
    today.getFullYear()
  )
}
