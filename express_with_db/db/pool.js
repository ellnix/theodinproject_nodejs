import { Pool } from "pg";
console.log(process.env.ROLE_PWD)

export default new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  database: "top_users",
  password: process.env.ROLE_PWD,
  port: process.env.DB_PORT || 5432,
});
