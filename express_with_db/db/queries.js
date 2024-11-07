import pool from "./pool";

export async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}

export async function insertUsername(name) {
  await pool.query("INSERT INTO users (username) VALUES ($1)", [name]);
}

export async function search(query) {
  query = `%${query}%`
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username ILIKE $1",
    [query],
  );

  return rows;
}
