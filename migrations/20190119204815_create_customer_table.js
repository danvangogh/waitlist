
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function (table) {
  table.increments();
  table.string('firstName');
  table.string('lastName');
  table.string('emailAddress');
  table.integer('statusCode')
  table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
};
