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

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!", links, users });
});

app.get("/about", (req, res) => {
  res.render("about", { phone: "123456", email: "test@email", links });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on port " + port));
