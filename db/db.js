const knex = require("knex");
const knexfile = require("./knexfile");

//NOTE: In production dont access knexfile development directly.
//Decide config with env variables
const db = knex(knexfile.development);
module.exports = db;
