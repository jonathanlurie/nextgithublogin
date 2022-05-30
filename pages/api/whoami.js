import fetch from 'node-fetch'
import { serialize, parse } from 'cookie'


export default async (req, res) => {
  const cookies = parse(req.headers.cookie || '')
  const access_token = cookies.access_token
  
  if (!access_token) {
    return res.status(404).json({ data: null, error: 'no one is logged' })
  }

  const response = await fetch(
    `https://api.github.com/user`,
    {
      method: 'get',
      headers: {
        Authorization: 'token ' + access_token
      }
    }
  )

  const json = await response.json()

  res.status(200).json({ data: json, error: null })
}


