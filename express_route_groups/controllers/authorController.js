import { get_author_by_id } from "../fake_db";
import { CustomNotFoundError } from "../errors/custom_not_found_error";
import asyncHandler from "express-async-handler";

export const provide_author_by_id = asyncHandler(async (req, res) => {
  const { author_id } = req.params;

  const author = await get_author_by_id(Number(author_id));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author name: ${author.name}`);
});
