exports.seed = function(knex, Promise) {
  return knex('alignments').del()
    .then(function () {
      return knex('alignments').insert([
        {id: 1, name: 'Lawful Good'},
        {id: 2, name: 'Neutral Good'},
        {id: 3, name: 'Chaotic Good'},
        {id: 4, name: 'Lawful Neutral'},
        {id: 5, name: 'True Neutral'},
        {id: 6, name: 'Chaotic Neutral'},
        {id: 7, name: 'Lawful Evil'},
        {id: 8, name: 'Neutral Evil'},
        {id: 9, name: 'Chaotic Evil'},
        {id: 10, name: 'Unaligned'}        
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('alignments_id_seq', (SELECT MAX(id) FROM alignments));`
      )
    })
}
