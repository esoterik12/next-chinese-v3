export function formatLastSession(date: Date) {
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  const days = Math.floor(seconds / 60 / 60 / 24)

  if (days === 0) {
    return 'today'
  } else if (days <= 30) {
    return `${days} days ago`
  } else {
    return 'over 30 days ago'
  }
}
