import { db } from "@vercel/postgres";


export default async function handler(req, res) {
  const client = await db.connect()

  try {
    const data = await client.sql`SELECT * FROM players`
    return res.status(200).json({ data })
  } catch(error) {
    return res.status(500).json({ error })
  }
}