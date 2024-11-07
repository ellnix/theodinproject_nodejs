import express from "express";
import path from "node:path";
import usersRouter from "./usersRouter";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
