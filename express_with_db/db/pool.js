import { Pool } from "pg";
console.log(process.env.ROLE_PWD)

export default new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: "top_users",
  password: process.env.ROLE_PWD,
  port: 5432,
});
