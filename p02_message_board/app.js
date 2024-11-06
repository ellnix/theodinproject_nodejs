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

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.render("index", { messages });
});

app.get("/new", (_req, res) => {
  res.render("messages/new");
});

app.post("/messages", (req, res) => {
  console.log(req);
  const { username, message } = req.body;

  if (!username) {
    res.status(400).send("Cannot create message without username");
    return;
  } else if (!message) {
    res.status(400).send("Cannot create message without a body");
    return;
  }

  messages.push({
    user: username,
    text: message,
    added: new Date(),
  });

  res.redirect("/");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
