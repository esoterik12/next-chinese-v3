'use server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY
})

interface GenerateSentenceProps {
  word: string
  level?: 1 | 2 | 3 | 4 | 5
}

export default async function generateSentence({
  word,
  level
}: GenerateSentenceProps) {
  const userInput = `
    Please use traditional Chinese characters as they would in Taiwan. 
    Make a sentence using this Chinese word: ${word} at a difficulty of TOCFL level ${level}. 
    Only reply with the sentence in traditional chinese and simplified and no further comments. 
    Also include a translation of the sentence and the sentence in pinyin. 
    Reply with only JSON: 
    { "sentTraditional": "", "sentSimplified": "", "sentPinyin": "", "sentTranslation": ""} 
    where the sentence, the pinyin sentence, and the translation are each a property of the JSON object. 
    `

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      temperature: 0.0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
        type: 'json_object'
      },
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userInput }
      ]
    })

    // Error if the response does not return the correct format
    if (!response.choices[0].message.content) {
      return {
        message:
          'Invalid response format from API; response returned unexpected format.',
        code: 500
      }
    }
    console.log(
      'ChatGPT API response arrived.: ',
      response.choices[0].message.content
    )

    // Return success and content parsed to JSON
    const jsonContent = JSON.parse(response.choices[0].message.content)
    if (!jsonContent) {
      return {
        message: 'Invalid response format from API; cannot parse to JSON.',
        code: 500
      }
    }

    return {
      message: 'Sentence generated successfully.',
      code: 200,
      result: JSON.parse(response.choices[0].message.content)
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
