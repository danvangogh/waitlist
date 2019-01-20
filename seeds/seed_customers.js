
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {firstName: 'John',
        lastName: 'Doh',
        emailAddress: 'john@doe.com',
        statusCode: 6},
        {firstName: 'Sue',
        lastName: 'Doh',
        emailAddress: 'sue@doe.com',
        statusCode: 5},
      ]);
    });
};
