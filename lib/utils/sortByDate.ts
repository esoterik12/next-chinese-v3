import { ReviewResultDocument } from '@/types/review.types'

export default function sortByDate(
  a: ReviewResultDocument,
  b: ReviewResultDocument
) {
  return (
    new Date(b.reviewHistory[b.reviewHistory.length - 1].date).getTime() -
    new Date(a.reviewHistory[a.reviewHistory.length - 1].date).getTime()
  )
}
