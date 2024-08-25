import { ActionFunction, json } from '@remix-run/cloudflare'
import { useActionData, Form } from '@remix-run/react'
import { getNearest } from './atlas/nearestColor'

export const action: ActionFunction = async ({ context, request }) => {
  const formData = await request.formData()
  const prompt = formData.get('prompt') as string

  // todo: use sql https://stackoverflow.com/questions/47058008/how-to-find-the-nearest-color-in-sql
  let nearest = getNearest(prompt)

  return json(nearest)
}

export default function NearestColorRoute() {
  const data = useActionData<typeof action>()

  return (
    <div>
      <Form method="post">
        <label>
          Nearest color:
          <input type="text" name="prompt" />
        </label>

        <button type="submit">Find</button>

        <p>{JSON.stringify(data) || 'No response yet'}</p>
      </Form>
    </div>
  )
}
