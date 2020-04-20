export function formatDate(timestamp) {
  const d = new Date(timestamp)
  // const time = d.toLocaleTimeString('en-US')
  // return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()

  return d.toLocaleDateString()
}

export function keyExtractor(item) {
  if (typeof item.id === 'number') return `${item.id}`
  else return item.id
}

export function firstLetterToUpperCase(text) {
  return text[0].toUpperCase() + text.slice(1)
}
