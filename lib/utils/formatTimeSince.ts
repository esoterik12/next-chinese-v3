export function formatTimeSince(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  if (seconds > 1) {
    let interval = Math.floor(seconds / 31536000)
    if (interval > 1) {
      return interval + ' years ago'
    } else if (interval === 1) {
      return '1 year ago'
    }

    interval = Math.floor(seconds / 2592000)
    if (interval > 1) {
      return interval + ' months ago'
    } else if (interval === 1) {
      return '1 month ago'
    }

    interval = Math.floor(seconds / 86400)
    if (interval > 1) {
      return interval + ' days ago'
    } else if (interval === 1) {
      return '1 day ago'
    }

    interval = Math.floor(seconds / 3600)
    if (interval > 1) {
      return interval + ' hours ago'
    } else if (interval === 1) {
      return '1 hour ago'
    }

    interval = Math.floor(seconds / 60)
    if (interval > 1) {
      return interval + ' minutes ago'
    } else if (interval === 1) {
      return '1 minute ago'
    }

    return seconds === 1 ? '1 second ago' : seconds + ' seconds ago'
  } else if (seconds < 1) {
    let interval = Math.abs(Math.floor(seconds / 60 / 60 / 24))

    return `in ${interval} days`
  }
}
