import { serialize, parse } from 'cookie'

export default async (req, res) => {
  const cookie = serialize('access_token', '', {
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  res.setHeader('Set-Cookie', cookie)
  
  res.redirect(`/`)
}


