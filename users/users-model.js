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
  addTodoList,
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

// refactored to return todos and all list items on each todo
function findUserTodos(userId) {
  return db("user_todos")
    .where("user_todos.user_id", userId)
    .join("users", "users.id", "user_todos.user_id")
    .join("todos", "todos.id", "user_todos.todo_id")
    .leftJoin("todo_lists", "todo_lists.todo_id", "todos.id")
    .select("todos.*", "todo_lists.*");
}

// takes an array of objects containing list items and sets them to a todo by todoID
// can also take a single object
function  addTodoList(todoId, listData) {  
  return db("todo_lists")
    .insert(listData)
    .then((res) => {
      return db("todos")
        .where("todos.id", todoId)
        .leftJoin("todo_lists", "todo_lists.todo_id", "todos.id")
        .select("todos.*", "todo_lists.*");
    })

}

// returns id of newly created todo
function addTodo(userId, todoBody) {
  return db("todos")
    .insert(todoBody)
    .then((res) => {
      console.log(res);
      return db("user_todos")
        .insert({
          user_id: userId,
          todo_id: res[0],
        })
        .then((res) => {
          console.log(res);
          return db("todos").where("todos.id", res[0]);
        });
    });
}

function findUserTodoById(id) {
  return db("todos").where({ "todos.id": id }).first();
}

function updateTodoByUserId(changes, name, userId) {
  return db("todos")
    .where("todos.name", name)
    .join("users", "users.id", "user_todos.user_id")
    .join("todos", "todos.id", "user_todos.todo_id")
    .select("todos.*")
    .where({ name: name })
    .update(changes)
    .then(() => {
      return db("user_todos")
        .where("user_todos.user_id", userId)
        .join("users", "users.id", "user_todos.user_id")
        .join("todos", "todos.id", "user_todos.todo_id")
        .select("todos.*")
        .where({ name: name });
    });
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
