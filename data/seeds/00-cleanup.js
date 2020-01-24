exports.seed = async (knex) => {
  await knex('companions').truncate()
};
