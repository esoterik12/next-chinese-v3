import { AppError } from '../errors/AppError'

export default function calcLevel (latestWord: number) {
  if (latestWord <= 500) {
    return 1
  } else if (latestWord <= 998) {
    return 2
  } else if (latestWord <= 2501) {
    return 3
  } else if (latestWord <= 4997) {
    return 4
  } else if (latestWord <= 7989) {
    return 5
  } else {
    throw new AppError(500, 'Invalid input.')
  }
}
