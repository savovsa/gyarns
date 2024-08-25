import { ActionFunction, json } from '@remix-run/cloudflare'
import { useActionData, Form } from '@remix-run/react'
import { useTransition } from 'react'

export const action: ActionFunction = async ({ context, request }) => {
  const formData = await request.formData()
  const prompt = formData.get('prompt') as string

  let instructions =
    '\n Interpret the color as if you are a color expert that can translate colors from hex to text. Be terse, provide only the color name. \n'

  const response = await context.ai.run('@cf/meta/llama-3.1-8b-instruct', {
    prompt: prompt + instructions,
    max_tokens: 30,
  })

  return json(response)
}

export default function LlamaRoute() {
  const data = useActionData<typeof action>()
  const transition = useTransition()

  return (
    <div>
      <Form method="post">
        <label>
          Ask LLaMA:
          <input type="text" name="prompt" />
        </label>

        <button type="submit">Ask</button>

        <p>{data?.response || 'No response yet'}</p>
      </Form>
    </div>
  )
}
