
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin_users').insert([
        {firstName: 'Patti',
         lastName: 'LePown',
         emailAddress: '1@2.com',
         password: '123'},
      ]);
    });
};
