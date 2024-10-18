/*
user grade q
repetition number n
easiness factor EF
interval I
*/
export default function sm2(q: number, n: number, ef: number, i: number) {
  if (q >= 3) {
    n += 1
    if (n === 0) {
      i = 1
    } else if (n === 1) {
      i = 6
    } else {
      i = Math.round(i * ef)
    }
  } else {
    n = 0
    i = 1
  }

  ef = ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  ef = Number(ef.toFixed(1))
  if (ef < 1.3) {
    ef = 1.3
  }

  return { n, ef, i }
}
