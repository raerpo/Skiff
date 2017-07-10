exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('admin', function(table) {
    table.string('rut').primary();
    table.string('password');
    table.string('name');
    table.string('lastName');
    table.string('birth');
    table.string('phone');
    table.string('email');
    table.string('comune');
    table.string('country');
    table.integer('availableDays');
    table.string('accountPlan');
    table.integer('accountPay');
    table.integer('accountsAvaibles');
    table.string('keygen');
    table.integer('type');
    table.integer('statusAccount');
    table.integer('work_id').unsigned().references('id').inTable('work');
   })
    .createTable('adminUser', function(table) {
      table.string('admin_rut').unsigned().references('rut').inTable('admin');
      table.string('user_rut').unsigned().references('rut').inTable('user');
      table.string('action');
    })
    .createTable('adminWork', function(table) {
      table.string('admin_rut').unsigned().references('rut').inTable('admin');
      table.integer('work_id').unsigned().references('id').inTable('work');
      table.string('action');
    })
    .createTable('day', function(table) {
      table.integer('id_d').primary();
      table.string('name');
      table.integer('numberDay');
    })
    .createTable('hour', function(table) {
      table.integer('id_h').primary();
      table.string('value');
    })
    .createTable('turn', function(table) {
      table.string('user_id').unsigned().references('rut').inTable('user');
      table.integer('hour_id').unsigned().references('id_h').inTable('hour');
      table.integer('day_id').unsigned().references('id_d').inTable('day');
      table.integer('work_id').unsigned().references('id').inTable('work');
    })
    .createTable('user', function(table) {
      table.string('rut').primary();
      table.string('password');
      table.string('name');
      table.string('lastName');
      table.string('birth');
      table.string('phone');
      table.string('email');
      table.string('comune');
      table.string('country');
      table.integer('availableDays');
      table.integer('type');
      table.integer('statusAccount');
      table.integer('work_id').unsigned().references('id').inTable('work');
    })
    .createTable('userWork', function(table) {
      table.string('user_rut').unsigned().references('rut').inTable('user');
      table.integer('work_id').unsigned().references('id').inTable('work');
    })
    .createTable('work', function(table) {
      table.increments('id').primary();
      table.integer('totalPlaces');
      table.string('comune');
      table.string('address');
      table.string('country');
      table.string('type');
      table.string('admin_rut').unsigned().references('rut').inTable('admin');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExist('admin')
    .dropTableIfExist('adminUser')
    .dropTableIfExist('adminWork')
    .dropTableIfExist('day')
    .dropTableIfExist('hour')
    .dropTableIfExist('turn')
    .dropTableIfExist('user')
    .dropTableIfExist('userWork')
    .dropTableIfExist('work')
};


