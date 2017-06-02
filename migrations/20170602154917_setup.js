exports.up = function(knex, Promise) {
  return knex.schema.createTable('store', table => {
    table.increments();
    table.string('name', 50);
    table.string('phone_number', 20);
  });
};

exports.down = function(knex, Promise) {

};
