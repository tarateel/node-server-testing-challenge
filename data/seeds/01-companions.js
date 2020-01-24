exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('companions').insert([
    { name: 'Rose Tyler' },
    { name: 'Mickey Smith'},
    { name: 'Jack Harkness'},
    { name: 'Donna Noble' },
    { name: 'River Song'},
    { name: 'Amy Pond'},
    { name: 'Rory Williams'},
    { name: 'Clara Oswin Oswald'},
    { name: 'Nardole'},
    { name: 'Bill Potts'},
  ]);
};
