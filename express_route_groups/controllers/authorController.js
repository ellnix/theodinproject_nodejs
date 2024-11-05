import { get_author_by_id } from "../fake_db";
import asyncHandler from "express-async-handler";

export const provide_author_by_id = asyncHandler(async (req, res) => {
  const { author_id } = req.params;

  const author = await get_author_by_id(Number(author_id));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author name: ${author.name}`);
});

