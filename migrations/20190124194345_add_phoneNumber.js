
exports.up = function(knex, Promise) {
  return knex.schema.table('customers', function (table) {
    table.integer('phoneNumber');
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.table('customers', function (table) {
    table.dropColumn('phoneNumber')
  });
}
