
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {firstName: 'John',
        lastName: 'Doh',
        emailAddress: 'john@doe.com',
        statusCode: 2},
        {firstName: 'Sue',
        lastName: 'Doh',
        emailAddress: 'sue@doe.com',
        statusCode: 3},
        {firstName: 'Dan',
        lastName: 'Doh',
        emailAddress: 'dan@doe.com',
        statusCode: 2},
        {firstName: 'Bob',
        lastName: 'Doh',
        emailAddress: 'bob@doe.com',
        statusCode: 1},
        {firstName: 'Rex',
        lastName: 'Doh',
        emailAddress: 'rex@doe.com',
        statusCode: 0},
        {firstName: 'Bex',
        lastName: 'Doh',
        emailAddress: 'bex@doe.com',
        statusCode: 0},
        {firstName: 'Tex',
        lastName: 'Doh',
        emailAddress: 'tex@doe.com',
        statusCode: 0},
        {firstName: 'Larry',
        lastName: 'Doh',
        emailAddress: 'larry@doe.com',
        statusCode: 0},
        {firstName: 'Gary',
        lastName: 'Doh',
        emailAddress: 'gary@doe.com',
        statusCode: 0},
        {firstName: 'Harry',
        lastName: 'Doh',
        emailAddress: 'harry@doe.com',
        statusCode: 0},
        {firstName: 'Terry',
        lastName: 'Doh',
        emailAddress: 'terry@doe.com',
        statusCode: 0},
        {firstName: 'Barry',
        lastName: 'Doh',
        emailAddress: 'barry@doe.com',
        statusCode: 0},
      ]);
    });
};
