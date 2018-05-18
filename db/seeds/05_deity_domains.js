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
        {id: 45, deity_id: 38, domain_id: 61},
        {id: 46, deity_id: 38, domain_id: 94},
        {id: 47, deity_id: 39, domain_id: 19},
        {id: 48, deity_id: 39, domain_id: 51},
        {id: 49, deity_id: 40, domain_id: 52},
        {id: 50, deity_id: 41, domain_id: 51},
        {id: 51, deity_id: 42, domain_id: 51},
        {id: 52, deity_id: 43, domain_id: 61},
        {id: 53, deity_id: 44, domain_id: 49},
        {id: 54, deity_id: 44, domain_id: 51},
        {id: 55, deity_id: 45, domain_id: 49},
        {id: 56, deity_id: 45, domain_id: 51},
        {id: 57, deity_id: 46, domain_id: 61},
        {id: 58, deity_id: 46, domain_id: 88},
        {id: 59, deity_id: 47, domain_id: 49},
        {id: 60, deity_id: 48, domain_id: 98},
        {id: 61, deity_id: 49, domain_id: 98},
        {id: 62, deity_id: 50, domain_id: 49},
        {id: 63, deity_id: 51, domain_id: 61},
        {id: 64, deity_id: 52, domain_id: 88},
        {id: 65, deity_id: 53, domain_id: 52},
        {id: 66, deity_id: 54, domain_id: 49},
        {id: 67, deity_id: 54, domain_id: 51},
        {id: 68, deity_id: 54, domain_id: 52},
        {id: 69, deity_id: 55, domain_id: 98},
        {id: 70, deity_id: 56, domain_id: 51},
        {id: 71, deity_id: 56, domain_id: 61},
        {id: 72, deity_id: 57, domain_id: 49},
        {id: 73, deity_id: 57, domain_id: 98},
        {id: 74, deity_id: 58, domain_id: 51},
        {id: 75, deity_id: 59, domain_id: 51},
        {id: 76, deity_id: 60, domain_id: 19},
        {id: 77, deity_id: 61, domain_id: 49},
        {id: 78, deity_id: 61, domain_id: 94},
        {id: 79, deity_id: 62, domain_id: 49},
        {id: 80, deity_id: 63, domain_id: 94},
        {id: 81, deity_id: 64, domain_id: 88},
        {id: 82, deity_id: 64, domain_id: 98},
        {id: 83, deity_id: 65, domain_id: 94},
        {id: 84, deity_id: 66, domain_id: 51},
        {id: 85, deity_id: 67, domain_id: 98},
        {id: 86, deity_id: 68, domain_id: 61},
        {id: 87, deity_id: 69, domain_id: 88},
        {id: 88, deity_id: 70, domain_id: 94},



      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('deity_domains_id_seq', (SELECT MAX(id) FROM deity_domains));`
      )
    })
}
