exports.up = function(knex, Promise) {
    return knex.schema.createTable('deity_domains', (table) => {
      table.increments()
      table.integer('deity_id').notNullable()
      table.foreign('deity_id').references('deities.id')
      table.integer('domain_id').notNullable()
      table.foreign('domain_id').references('domains.id')
      table.timestamps(true, true)
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('deity_domains')
  }
  