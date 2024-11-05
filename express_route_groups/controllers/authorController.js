import { get_author_by_id } from "../fake_db";

export async function provide_author_by_id(req, res) {
  const { author_id } = req.params;

  try {
    const author = await get_author_by_id(Number(author_id));

    if (!author) {
      res.status(404).send("Author not found");
      return;
    }

    res.send(`Author name: ${author.name}`);
  } catch (error) {
    console.log("Failed to fetch author:");
    console.log(error);
    res.sendStatus(500);
  }
}
