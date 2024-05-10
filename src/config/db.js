const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  })

  pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err)
      } else {
        console.log('Connected to PostgreSQL database')
      }
  })

  module.exports = pool