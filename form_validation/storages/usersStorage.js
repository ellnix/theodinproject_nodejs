class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ first_name, last_name, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, first_name, last_name, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { first_name, last_name, email, age, bio }) {
    this.storage[id] = { id, first_name, last_name, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  search({ name, email }) {
    return this.getUsers().filter(
      (user) =>
        `${user.first_name} ${user.last_name}`.includes(name) &&
        user.email.includes(email),
    );
  }
}

export default new UsersStorage();
