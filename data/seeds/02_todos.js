
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {name: 'Plants', noteItems: 'Water my plants', reoccurring: false, completed: false, category: 'day'},
        {name: 'Dishes', noteItems: 'Wash dishes',reoccurring: false, completed: false, category: 'week'},
        {name: 'Dog', noteItems: 'Bath the dog',reoccurring: false, completed: false, category: 'month'},
        {name: 'Groceries', noteItems: 'Grocery shop',reoccurring: false, completed: false, category: 'day'},
        {name: 'Bank', noteItems: 'Run by the bank',reoccurring: false, completed: false, category: 'week'},
        {name: 'Schedule', noteItems: 'Schedule PTA meeting',reoccurring: false, completed: false, category: 'month'},
        {name: 'Budget', noteItems: 'Set a budget',reoccurring: false, completed: false, category: 'day'},
        {name: 'Return', noteItems: 'Return that redbox movie',reoccurring: false, completed: false, category: 'week'},
        {name: 'Laundry', noteItems: 'Start your laundry',reoccurring: false, completed: false, category: 'month'},
        {name: 'Cleaning', noteItems: 'Set time for spring cleaning',reoccurring: false, completed: false, category: 'day'},
        {name: 'Cleaning', noteItems: 'Clean the car',reoccurring: false, completed: false, category: 'week'},
        {name: 'Kids', noteItems: 'Pick up the kids from practice',reoccurring: false, completed: false, category: 'month'},
        {name: 'Read', noteItems: 'Read a book',reoccurring: false, completed: false, category: 'day'},
        {name: 'Organize', noteItems: 'Organzize your life',reoccurring: false, completed: false, category: 'week'},
        {name: 'Write', noteItems: 'Write a letter',reoccurring: false, completed: false, category: 'day'},
        {name: 'Cook', noteItems: 'Cook dinner',reoccurring: false, completed: false, category: 'week'},
        {name: 'Car', noteItems: 'Get an oil change',reoccurring: false, completed: false, category: 'month'},
        {name: 'Taxes', noteItems: 'Do your taxes',reoccurring: false, completed: false, category: 'day'},
        {name: 'Self', noteItems: 'Make time for self-care',reoccurring: false, completed: false, category: 'week'},
        {name: 'Self', noteItems: 'Try different wines',reoccurring: false, completed: false, category: 'month'},
        {name: 'Self', noteItems: 'Visit the beach',reoccurring: false, completed: false, category: 'day'},
        {name: 'Cleaning', noteItems: 'Clean out closet',reoccurring: false, completed: false, category: 'week'},
        {name: 'Kids', noteItems: 'Visit the grandkids',reoccurring: false, completed: false, category: 'month'},
      ]);
    });
};
