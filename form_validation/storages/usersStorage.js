class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ first_name, last_name }) {
    const id = this.id;
    this.storage[id] = { id, first_name, last_name };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { first_name, last_name }) {
    this.storage[id] = { first_name, last_name }
  }

  deleteUser(id) {
    delete this.storage[id]
  }
}

export default new UsersStorage()
