exports.seed = function(knex, Promise) {
  return knex('pantheons').del()
    .then(function () {
      return knex('pantheons').insert([
        {id: 1, name: 'The Forgotten Realms'},
        {id: 2, name: 'Celtic'},
        {id: 3, name: 'Greek'},
        {id: 4, name: 'Egyptian'},
        {id: 5, name: 'Norse'},
        {id: 6, name: 'Greyhawk'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('pantheons_id_seq', (SELECT MAX(id) FROM pantheons));`
      )
    })
}
