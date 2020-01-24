const db = require('../data/dbConfig');

function find() {
  return db('companions')
};


module.exports = {
  find,
  // findById,
  // insert,
  // update,
  // remove,
}