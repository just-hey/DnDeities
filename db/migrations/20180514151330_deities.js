exports.up = function(knex, Promise) {
    return knex.schema.createTable('deities', (table) => {
      table.increments()
      table.string('name').notNullable().defaultTo('')
      table.string('of').notNullable().defaultTo('')
      table.integer('alignment').notNullable()
      table.foreign('alignment').references('alignments.id')
      table.string('level').notNullable().defaultTo('')
      table.boolean('active').notNullable().defaultTo(true)
      table.string('url').notNullable().defaultTo('')
      table.string('symbol').notNullable().defaultTo('')
      table.integer('pantheon').notNullable()
      table.foreign('pantheon').references('pantheons.id')
      table.timestamps(true, true)
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('deities')
  }
  