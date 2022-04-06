// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { id } = req.query
  return res.json({ name: process.env.MY_VAL })
}
