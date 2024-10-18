export function formatDuration(date: Date) {
  const secondsElpased = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  )

  const hours = Math.floor(secondsElpased / 3600)
  const minutes = Math.floor((secondsElpased % 3600) / 60)
  const seconds = secondsElpased % 60

  const padWithZero = (num: number): string => num.toString().padStart(2, '0')

  if (hours) {
    return `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)}`
  } else {
    return `${padWithZero(minutes)}:${padWithZero(seconds)}`
  }
}
