import { ActionFunction, json } from '@remix-run/cloudflare'
import { useActionData, Form } from '@remix-run/react'
import { useTransition } from 'react'

export const action: ActionFunction = async ({ context, request }) => {
  const formData = await request.formData()
  const prompt = formData.get('prompt') as string

  const response = await context.ai.run('@cf/meta/llama-3.1-8b-instruct', {
    prompt,
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

        {transition.state === 'submitting' ? (
          <p>Waiting for response...</p>
        ) : (
          <p>{data?.response || 'No response yet'}</p>
        )}
      </Form>
    </div>
  )
}
