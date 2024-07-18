const knex = require('knex');
const knexfile = require('./knexfile');

// Determine environment based on NODE_ENV or default to 'development'
const environment = process.env.NODE_ENV || 'development';

// Select configuration based on environment
const config = knexfile[environment];

// Initialize Knex instance with selected configuration
const db = knex(config);

module.exports = db;
