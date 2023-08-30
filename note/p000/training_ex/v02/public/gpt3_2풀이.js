import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
  apiKey: process.env.VUE_APP_gpt3
})
const openai = new OpenAIApi(configuration)

export async function gpt3(input) {
  const pmt = ` ${input}`
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: '10대 남성 '
      },
      {
        role: 'system',
        content: '살이 많이 찜'
      },
      {
        role: 'system',
        content: '여행을 좋아함'
      },
      {
        role: 'user',
        content: `${pmt}`
      }
    ]
  })
  const answer = response.data.choices[0].message.content
  return answer
}
