'use server'
import Word from '@/models/word.model'
import { connectToDB } from '../mongoose'

export const testDbFunction = async () => {
  try {
    await connectToDB()

    const testWord = new Word({
      tocflLevel: 1,
      wordNumber: 1,
      wordTraditional: '測試',
      wordSimplified: '测试',
      wordPinyin: 'cè shì',
      wordTranslation: 'test',
      partOfSpeech: 'noun',
      wordSentences: [],
      usersSeen: []
    })

    const result = await testWord.save()

    console.log('result', result)
  } catch (error) {
    console.log('error', error)
  }
}
