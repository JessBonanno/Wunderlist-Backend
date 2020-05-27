
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {title: 'Plants', description: 'Water my plants'},
        {title: 'Dishes', description: 'Wash dishes'},
        {title: 'Dog', description: 'Bath the dog'},
        {title: 'Groceries', description: 'Grocery shop'},
        {title: 'Bank', description: 'Run by the bank'},
        {title: 'Schedule', description: 'Schedule PTA meeting'},
        {title: 'Budget', description: 'Set a budget'},
        {title: 'Return', description: 'Return that redbox movie'},
        {title: 'Laundry', description: 'Start your laundry'},
        {title: 'Cleaning', description: 'Set time for spring cleaning'},
        {title: 'Cleaning', description: 'Clean the car'},
        {title: 'Kids', description: 'Pick up the kids from practice'},
        {title: 'Read', description: 'Read a book'},
        {title: 'Organize', description: 'Organzize your life'},
        {title: 'Write', description: 'Write a letter'},
        {title: 'Cook', description: 'Cook dinner'},
        {title: 'Car', description: 'Get an oil change'},
        {title: 'Taxes', description: 'Do your taxes'},
        {title: 'Self', description: 'Make time for self-care'},
        {title: 'Self', description: 'Try different wines'},
        {title: 'Self', description: 'Visit the beach'},
        {title: 'Cleaning', description: 'Clean out closet'},
        {title: 'Kids', description: 'Visit the grandkids'},
      ]);
    });
};
