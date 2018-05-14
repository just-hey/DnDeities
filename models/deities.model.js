const knex = require('../db/knex.js')


function viewAll() {
    return knex('deities')
}


module.exports = { viewAll }
