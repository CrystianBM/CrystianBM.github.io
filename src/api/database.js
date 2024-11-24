import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default async function handler(req, res) {
    try {
      const result = await pool.query('SELECT * FROM players'); // Example query
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  }

export async function insertDataPlayer(values) {
    // Insert a new row into a table
    await pool.query(
        'INSERT INTO Players (charactername, characterage, charactergender, characterlook, charactertendency, '
        + 'attstrength, attvigor, attagility, attintelligence, attperception, attknowledge, attcharisma) '
        + 'VALUES (value[0], value[1], value[2], value[3], value[4], value[5], value[6], value[7], value[8], value[9], value[10], value11])'
    );
}
