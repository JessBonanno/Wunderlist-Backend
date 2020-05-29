const bcrypt = require("bcryptjs");
const db = require("../data/config.js");
module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserTodos,
  addTodo,
  update,
  remove,
  updateTodoByUserId,
  findUserTodoById,
};
async function add(user) {
  return db("users").insert(user, "id");
}

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

function findUserTodos(userId) {
  return db("user_todos")
    .where("user_todos.user_id", userId)
    .join("users", "users.id", "user_todos.user_id")
    .join("todos", "todos.id", "user_todos.todo_id")
    .select("todos.*");
}

function addTodo(userId, todoId) {
  return db("user_todos").insert(
    {
      user_id: userId,
      todo_id: todoId,
    },
    "id"
  );
}

function findUserTodoById(id) {
	return db('todos')
	.where({'todos.id': id})
	.first();
}

function updateTodoByUserId(changes, name, userId) {
	return db("todos")
    .where("todos.id", userId)
    .join("users", "users.id", "user_todos.user_id")
    .join("todos", "todos.id", "user_todos.todo_id")
	.select("todos.*")
	.where({name: name})
	.update(changes)
	.then(() => {
		return findUserTodos(userId);
	})
}

function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("users").where({ id }).del();
}
