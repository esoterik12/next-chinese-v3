export const getRandomFourtoSixMonthsInterval = (
  min: number = 120,
  max: number = 240
): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
