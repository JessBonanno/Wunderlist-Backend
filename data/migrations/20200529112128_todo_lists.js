
exports.up = function(knex) {
    return knex.schema.createTable('todo_lists', lists => {
      lists.increments().primary();
      lists.string('item', 255);
      lists.boolean('completed').defaultsTo(false).notNullable();
  
      lists
      .integer('todo_id')
      .notNullable()
      .references('id')
      .inTable('todos')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
 
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('todo_lists');
  };
  