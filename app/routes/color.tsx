import { ActionFunction, json, TypedResponse } from '@remix-run/cloudflare'
import { useActionData, Form } from '@remix-run/react'
import { ColorMatch, getNearest } from './atlas/nearestColor'
import { ColorBadge } from '../components/ColorBadge'

export const action: ActionFunction = async ({ context, request }) => {
  const formData = await request.formData()
  const prompt = formData.get('prompt') as string

  // todo: use sql https://stackoverflow.com/questions/47058008/how-to-find-the-nearest-color-in-sql
  let nearest = getNearest(prompt)

  return json(nearest)
}

export default function NearestColorRoute() {
  const data = useActionData<ColorMatch>()

  return (
    <Form
      method="post"
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <div style={{ display: 'flex', gap: 5 }}>
        <label htmlFor="prompt">Nearest color:</label>
        <input type="text" name="prompt" />

        <button type="submit">Find</button>
      </div>

      {data && <ColorBadge color={data.value} name={data.name} />}
    </Form>
  )
}
