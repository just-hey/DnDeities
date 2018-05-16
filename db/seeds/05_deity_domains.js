exports.seed = function(knex, Promise) {
  return knex('deity_domains').del()
    .then(function () {
      return knex('deity_domains').insert([
        {id: 1, deity_id: 1, domain_id: 61},
        {id: 2, deity_id: 2, domain_id: 49},
        {id: 3, deity_id: 3, domain_id: 98},
        {id: 4, deity_id: 4, domain_id: 94},
        {id: 5, deity_id: 5, domain_id: 19},
        {id: 6, deity_id: 6, domain_id: 51},
        {id: 7, deity_id: 7, domain_id: 94},
        {id: 8, deity_id: 8, domain_id: 49},
        {id: 9, deity_id: 9, domain_id: 51},
        {id: 10, deity_id: 10, domain_id: 49},
        {id: 11, deity_id: 11, domain_id: 51},
        {id: 12, deity_id: 12, domain_id: 51},
        {id: 13, deity_id: 13, domain_id: 19},
        {id: 14, deity_id: 14, domain_id: 51},
        {id: 15, deity_id: 15, domain_id: 94},
        {id: 16, deity_id: 16, domain_id: 51},
        {id: 17, deity_id: 17, domain_id: 19},
        {id: 18, deity_id: 18, domain_id: 61},
        {id: 19, deity_id: 19, domain_id: 94},
        {id: 20, deity_id: 20, domain_id: 61},
        {id: 21, deity_id: 21, domain_id: 52},
        {id: 22, deity_id: 22, domain_id: 19},
        {id: 23, deity_id: 23, domain_id: 49},
        {id: 24, deity_id: 24, domain_id: 49},
        {id: 25, deity_id: 25, domain_id: 49},
        {id: 26, deity_id: 26, domain_id: 49},
        {id: 27, deity_id: 27, domain_id: 19},
        {id: 28, deity_id: 28, domain_id: 61},
        {id: 29, deity_id: 29, domain_id: 51},
        {id: 30, deity_id: 1, domain_id: 88},
        {id: 31, deity_id: 11, domain_id: 52},
        {id: 32, deity_id: 14, domain_id: 52},
        {id: 33, deity_id: 26, domain_id: 51},
        {id: 34, deity_id: 27, domain_id: 94},
        {id: 35, deity_id: 29, domain_id: 52},
        {id: 36, deity_id: 30, domain_id: 19},
        {id: 37, deity_id: 31, domain_id: 88},
        {id: 38, deity_id: 32, domain_id: 98},
        {id: 39, deity_id: 33, domain_id: 98},
        {id: 40, deity_id: 34, domain_id: 94},
        {id: 41, deity_id: 35, domain_id: 98},
        {id: 42, deity_id: 36, domain_id: 88},
        {id: 43, deity_id: 37, domain_id: 49},
        {id: 44, deity_id: 37, domain_id: 94},
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('deity_domains_id_seq', (SELECT MAX(id) FROM deity_domains));`
      )
    })
}
