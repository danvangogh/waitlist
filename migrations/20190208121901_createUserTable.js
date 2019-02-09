
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin_users', function (table) {
  table.increments();
  table.string('firstName');
  table.string('lastName');
  table.string('emailAddress');
  table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin_users');
};
