
exports.up = function(knex) {
  return knex.schema.createTable('todos', todos => {
    todos.increments().primary();

    todos.string('name', 255).notNullable();

    // todos
    //   .integer('todo_lists_id')
    //   .notNullable()
    //   .references('todo_id')
    //   .inTable('todo_lists')
    //   .onDelete('CASCADE')
    //   .onUpdate('CASCADE');

    todos.boolean('reoccurring').defaultsTo(false).notNullable();

    todos.boolean('completed').defaultsTo(false).notNullable();

    todos.string('category', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todos');
};
