const knex = require('../db/knex.js')


function viewAll() {
    return knex('deities')
}

function viewOne(id) {
    return knex('deities')
        .where({ id })
        .first()
}


module.exports = { viewAll, viewOne }
