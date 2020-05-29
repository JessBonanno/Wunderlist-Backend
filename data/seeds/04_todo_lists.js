exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todo_lists")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("todo_lists").insert([
        { item: "water plants", completed: false, todo_id: 1 },
        { item: "give plants food", completed: false, todo_id: 1 },
        { item: "spray the leaves", completed: false, todo_id: 1 },
        { item: "prune", completed: false, todo_id: 1 },
        { item: "milk", completed: false, todo_id: 4 },
        { item: "eggs", completed: false, todo_id: 4 },
        { item: "plant food", completed: false, todo_id: 4 },
        { item: "red bull", completed: false, todo_id: 4 },
      ]);
    });
};
