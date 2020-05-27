
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_todos').insert([
        {user_id: 1, todo_id: 1},
        {user_id: 1, todo_id: 2},
        {user_id: 1, todo_id: 3},
        {user_id: 2, todo_id: 4},
        {user_id: 2, todo_id: 5},
        {user_id: 3, todo_id: 6},
        {user_id: 3, todo_id: 7},
        {user_id: 3, todo_id: 8},
        {user_id: 4, todo_id: 9},
        {user_id: 4, todo_id: 10},
        {user_id: 5, todo_id: 11},
        {user_id: 5, todo_id: 12},
        {user_id: 5, todo_id: 13},
        {user_id: 6, todo_id: 14},
        {user_id: 6, todo_id: 15},
        {user_id: 7, todo_id: 16},
        {user_id: 8, todo_id: 17},
        {user_id: 8, todo_id: 18},
        {user_id: 9, todo_id: 19},
        {user_id: 9, todo_id: 20},
        {user_id: 9, todo_id: 21},
        {user_id: 10, todo_id: 22},
        {user_id: 10, todo_id: 23}
      ]);
    });
};
