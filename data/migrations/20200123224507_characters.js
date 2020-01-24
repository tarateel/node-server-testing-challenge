exports.up = async function(knex) {
  await knex.schema.createTable('companions', (table) => {
    table
      .increments()
    table.string('name', 255)
      .notNullable()
      .unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('companions')
};
