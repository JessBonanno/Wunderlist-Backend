
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {name: 'Plants', reoccurring: false, completed: false, category: 'day'},
        {name: 'Dishes', reoccurring: false, completed: false, category: 'week'},
        {name: 'Dog', reoccurring: false, completed: false, category: 'month'},
        {name: 'Groceries', reoccurring: false, completed: false, category: 'day'},
        {name: 'Bank', reoccurring: false, completed: false, category: 'week'},
        {name: 'Schedule', reoccurring: false, completed: false, category: 'month'},
        {name: 'Budget', reoccurring: false, completed: false, category: 'day'},
        {name: 'Return', reoccurring: false, completed: false, category: 'week'},
        {name: 'Laundry', reoccurring: false, completed: false, category: 'month'},
        {name: 'Cleaning', reoccurring: false, completed: false, category: 'day'},
        {name: 'Cleaning', reoccurring: false, completed: false, category: 'week'},
        {name: 'Kids', reoccurring: false, completed: false, category: 'month'},
        {name: 'Read', reoccurring: false, completed: false, category: 'day'},
        {name: 'Organize', reoccurring: false, completed: false, category: 'week'},
        {name: 'Write', reoccurring: false, completed: false, category: 'day'},
        {name: 'Cook', reoccurring: false, completed: false, category: 'week'},
        {name: 'Car', reoccurring: false, completed: false, category: 'month'},
        {name: 'Taxes', reoccurring: false, completed: false, category: 'day'},
        {name: 'Self', reoccurring: false, completed: false, category: 'week'},
        {name: 'Self', reoccurring: false, completed: false, category: 'month'},
        {name: 'Self', reoccurring: false, completed: false, category: 'day'},
        {name: 'Cleaning', reoccurring: false, completed: false, category: 'week'},
        {name: 'Kids', reoccurring: false, completed: false, category: 'month'},
      ]);
    });
};
