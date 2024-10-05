import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY
})

export default async function generateSentence() {
  const dummyWord = ''

  const userInput = {
    message: `Please use traditional Chinese characters as they would in Taiwan. Make a sentence using this Chinese word: ${dummyWord}. Only reply with the sentence and no further comments. Also include a translation of the sentence and the sentence in pinyin. Reply with a javascript object: const output={ sentence: '', pinyin: '', translation: ''}, where the sentence, the pinyin sentence, and the translation are each a property of the object. Make sure all characters are traditional Chinese.`
  }

  // Updated user input request format
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Generate a random sentece in Chinese' }
      ]
    })
    console.log('ChatGPT API response arrived.')
    return {
      message: 'Sentence generated successfully.',
      code: 200,
      result: response.choices[0].message
    }
  } catch (error) {
    console.error('Error generating sentence:', error)
    return {
      message: 'Sentence generation failed.',
      code: 500,
      originalError: error
    }
  }
}
