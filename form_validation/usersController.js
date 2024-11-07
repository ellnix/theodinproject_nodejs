import usersStorage from "./storages/usersStorage";

export default {
  index: (req, res) => {
    res.render("users/index", { users: usersStorage.getUsers() });
  },
  new: (req, res) => {
    res.render("users/new");
  },
  create: (req, res) => {
    const { first_name, last_name } = req.body;

    usersStorage.addUser({ first_name, last_name });

    res.redirect("/");
  },
};
