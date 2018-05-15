exports.up = function(knex, Promise) {
    return knex.schema.createTable('pantheons', (table) => {
      table.increments()
      table.string('name').notNullable().defaultTo('')
      table.timestamps(true, true)
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pantheons')
  }
  