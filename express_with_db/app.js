import 'dotenv/config';

import express from "express";
import path from "node:path";
import { getAllUsernames, insertUsername } from './db/queries';

const app = express();

app.use(express.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (_, res) => {
  const usernames = await getAllUsernames();
  console.log(usernames);
  res.send("See the logs..");
});

app.get("/new", (_req, res) => {
  res.render("new", { user: {} });
});

app.post("/", (req, res) => {
  insertUsername(req.body.name);
  res.redirect("/");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server now listening on port ${port}....`));
