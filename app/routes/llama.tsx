import { ActionFunction, json } from '@remix-run/cloudflare'
import { useActionData, Form } from '@remix-run/react'

export const action: ActionFunction = async ({ context, request }) => {
  const formData = await request.formData()
  const prompt = formData.get('prompt') as string

  const output = await context.ai.run('@cf/meta/llama-3.1-8b-instruct', {
    prompt: prompt,
    max_tokens: 30,
  })

  if ('response' in output) {
    return json(output.response)
  }

  return null
}

export default function LlamaRoute() {
  const data = useActionData<string>()

  return (
    <div>
      <Form method="post">
        <label>
          Ask LLaMA:
          <input type="text" name="prompt" />
        </label>

        <button type="submit">Ask</button>

        <p>{data || 'No response yet'}</p>
      </Form>
    </div>
  )
}
