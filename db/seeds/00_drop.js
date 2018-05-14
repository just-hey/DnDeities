exports.seed = function(knex, Promise) {
  return knex('deity_domains').del()
    .then(() => knex('deities').del())
    .then(() => knex('pantheons').del())
    .then(() => knex('domains').del())
    .then(() => knex('alignments').del())

}
