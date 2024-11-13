'use server'
import OpenAI from 'openai'
import { AppError } from '@/lib/errors/AppError'

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY
})

interface GenerateSentenceProps {
  word: string
  level?: number
}

/*
Please use the following grammar concept in the generated sentence: ${JSON.stringify(dummyGrammar[0].sectionConcepts[2])}.
The most important part is that you use the target word: ${word}.
*/

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
      throw new AppError(
        500,
        'Invalid response format from sentence generation API; response returned unexpected format.'
      )
    }

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
    if (error instanceof AppError) {
      return {
        code: error.code,
        error: error.message
      }
    }

    // Generic errors
    return {
      code: 500,
      error: `An unexpected error occurred while ending the session: ${error.message}`
    }
  }
}
