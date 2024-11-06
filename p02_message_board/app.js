import express from "express";
import path from "node:path";

const app = express();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.render("index", { messages });
});

app.get("/new", (_req, res) => {
  res.render("messages/new");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
