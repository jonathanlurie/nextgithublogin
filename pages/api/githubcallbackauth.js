import fetch from 'node-fetch'
import { serialize, parse } from 'cookie'

const clientID = process.env.NEXT_PUBLIC_GH_CLIENT_ID
const clientSecret = process.env.GH_CLIENT_SECRET

export default async (req, res) => {
  const requestToken = req.query.code

  const response = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json'
      }
    }
  )

  const json = await response.json()

  const access_token = json.access_token

  const MAX_AGE = 60 * 60 * 24 * 365 // 1 year
  const cookie = serialize('access_token', access_token, {
    maxAge: MAX_AGE,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  res.setHeader('Set-Cookie', cookie)
  
  res.redirect(`/`)
}


