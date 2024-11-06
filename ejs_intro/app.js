import express from "express";
import path from "node:path";

const app = express();
const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!", links, users });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on port " + port));
