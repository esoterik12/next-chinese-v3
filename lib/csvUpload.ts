import fs from 'fs'
import csv from 'csv-parser'
import mongoose from 'mongoose'
import Word from '../models/word.model'

const shuffleArray = (array: number[]) => {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

export const readCSV = async () => {
  const file = 'C:\\projects\\next-chinese-v3\\public\\word-data.csv'

  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('Mongo DB Connection Open')
    })
    .catch((err: any) => {
      console.log('Error connection')
      console.log(err)
    })

  // This section creates some numbers to fill empty wordNum value for words in L3-5
  // The data for these levels is in alphabetical order and I do not want the words
  // to be ordered that way, but rather randomly

  const levelThreeWordNumArray: number[] = [] // 2501
  for (let i = 999; i <= 2501; i++) {
    levelThreeWordNumArray.push(i)
  }
  const levelFourWordNumArray: number[] = [] // 4997
  for (let i = 2502; i <= 4997; i++) {
    levelFourWordNumArray.push(i)
  }
  const levelFiveWordNumArray: number[] = [] // 7989
  for (let i = 4998; i <= 7989; i++) {
    levelFiveWordNumArray.push(i)
  }
  const shuffledLevelNumThreeArr = shuffleArray(levelThreeWordNumArray)
  const shuffledLevelNumFourArr = shuffleArray(levelFourWordNumArray)
  const shuffledLevelNumFiveArr = shuffleArray(levelFiveWordNumArray)

  const dataArray: any[] = []

  const processCSV = async () => {
    return new Promise<void>((resolve, reject) => {
      fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row: any) => dataArray.push(row))
        .on('end', () => {
          console.log('CSV file processed successfully.')
          resolve()
        })
        .on('error', (err: any) => reject(err))
    })
  }

  await processCSV()

  // Adds the random wordNums to the new dataArray
  let j = 998
  for (let i = 0; i <= shuffledLevelNumThreeArr.length - 1; i++) {
    dataArray[j].wordNumber = shuffledLevelNumThreeArr[i].toString()
    j++
  }
  for (let i = 0; i <= shuffledLevelNumFourArr.length - 1; i++) {
    dataArray[j].wordNumber = shuffledLevelNumFourArr[i].toString()
    j++
  }
  for (let i = 0; i <= shuffledLevelNumFiveArr.length - 1; i++) {
    dataArray[j].wordNumber = shuffledLevelNumFiveArr[i].toString()
    j++
  }

  // new array made to deal with issue with first property name of dataArray being a string
  // not sure how to remove it - property name issue
  const newDataArray = dataArray.map(newWord => {
    return {
      wordNumber: parseInt(newWord.wordNumber),
      tocflLevel: parseInt(newWord.tocflLevel),
      wordSimplified: newWord.wordSimplified,
      wordTraditional: newWord.wordTraditional,
      wordPinyin: newWord.wordPinyin,
      partOfSpeech: newWord.partOfSpeech,
      wordTranslation: newWord.wordTranslation
    }
  })

  const uploadResult = await Word.insertMany(newDataArray)
  console.log('uploadResult', uploadResult)
}
