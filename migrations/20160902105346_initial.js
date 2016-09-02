
exports.up = function(knex, Promise) {
  return knex.schema.createTable('taco_toppings', function(table){
      table.increments();
      table.string('name');
      table.timestamps();
  })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('taco_toppings')
};


