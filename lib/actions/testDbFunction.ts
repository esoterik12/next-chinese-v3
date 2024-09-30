'use server'
import { connectToDB } from '../mongoose'
import { fetchWords } from './getWords'

export const testDbFunction = async () => {
  try {
    await connectToDB()

    // const result = await readCSV()
    const result = fetchWords()

    console.log('result', result)
  } catch (error) {
    console.log('error', error)
  }
}
