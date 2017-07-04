exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('admin', table => {
  		table.string('rut', 10);
  		table.string('password', 15);
  		table.string('name', 15);
  		table.string('lastName', 25);
  		table.string('birth', 14);
  		table.string('phone', 9);
  		table.string('email', 30);
  		table.string('comune', 30);
  		table.string('country', 20);
  		table.integer('avaibleDays');
  		table.string('accountPlan', 20);
  		table.integer('accountPay');
  		table.integer('accountsAvaibles');
  		table.string('keygen', 8);
  		table.integer('type');
  		table.integer('statusAccount');
  		table.integer('work_id').unsigned().references('id').inTable('work');
  	}),
    knex.schema.createTable('adminUser', table => {
      table.string('admin_rut', 10).unsigned().references('rut').inTable('admin');
      table.string('user_rut', 10).unsigned().references('rut').inTable('user');
      table.string('action', 255);
    }),
    knex.schema.createTable('adminWork', table => {
      table.string('admin_rut', 10).unsigned().references('rut').inTable('admin');
      table.integer('work_id').unsigned().references('id').inTable('work');
      table.string('action', 255);
    }),
    knex.schema.createTable('day', table => {
      table.integer('id_d');
      table.string('name', 10);
      table.integer('numberDay');
    }),
    knex.schema.createTable('hour', table => {
      table.integer('id_h');
      table.string('value', 13);
    }),
    knex.schema.createTable('turn', table => {
      table.string('user_id', 14).unsigned().references('rut').inTable('user');
      table.integer('hour_id').unsigned().references('id_h').inTable('hour');
      table.integer('day_id').unsigned().references('id_d').inTable('day');
      table.integer('work_id').unsigned().references('id').inTable('work');
    }),
    knex.schema.createTable('user', table => {
      table.string('rut', 10);
      table.string('password', 15);
      table.string('name', 15);
      table.string('lastName', 25);
      table.string('birth', 14);
      table.string('phone', 9);
      table.string('email', 30);
      table.string('comune', 14);
      table.string('country', 20);
      table.integer('avaibleDays');
      table.integer('type');
      table.integer('statusAccount');
      table.integer('work_id').unsigned().references('id').inTable('work');
    }),
    knex.schema.createTable('userWork', table => {
      table.string('user_rut', 10).unsigned().references('rut').inTable('user');
      table.integer('work_id').unsigned().references('id').inTable('work');
    }),
    knex.schema.createTable('work', table => {
      table.increments('id');
      table.string('admin_rut', 10).unsigned().references('rut').inTable('admin');
      table.integer('totalPlaces');
      table.string('comune', 20);
      table.string('address', 255);
      table.string('country', 20);
      table.string('type', 20);
    })
  ]);
};

exports.down = function(knex, Promise) {
  knex('day').insert({id_d: 0, name: 'Lunes', numberDay: 1})
}; 


