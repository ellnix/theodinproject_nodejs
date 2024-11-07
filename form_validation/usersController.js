import usersStorage from "./storages/usersStorage";
import { body, validationResult } from "express-validator";

const userValidation = [
  body("first_name")
    .trim()
    .isAlpha()
    .withMessage("First name must be alphanumeric")
    .isLength({ min: 1, max: 10 })
    .withMessage("First name must be between 1 and 10 letters"),
  body("last_name")
    .trim()
    .isAlpha()
    .withMessage("Last name must be alphanumeric")
    .isLength({ min: 1, max: 10 })
    .withMessage("Last name must be between 1 and 10 letters"),
];

export default {
  index: (_req, res) => {
    res.render("users/index", { users: usersStorage.getUsers() });
  },
  new: (_req, res) => {
    res.render("users/new");
  },
  create: [
    userValidation,
    (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).render("users/new", { errors: errors.array() });
      }

      const { first_name, last_name } = req.body;
      usersStorage.addUser({ first_name, last_name });
      res.redirect("/");
    },
  ],
  edit: (req, res) => {
    const { id } = req.params;
    const user = usersStorage.getUser(Number(id));
    res.render("users/edit", { user });
  },
  update: [
    userValidation,
    (req, res) => {
      const { id } = req.params;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const user = usersStorage.getUser(Number(id));
        return res
          .status(400)
          .render("users/edit", { user, errors: errors.array() });
      }

      const { first_name, last_name } = req.body;
      usersStorage.updateUser(Number(id), { first_name, last_name });
      res.redirect("/");
    },
  ],
  delete: (req, res) => {
    const { id } = req.params;
    usersStorage.deleteUser(id);
    res.redirect("/");
  },
};
