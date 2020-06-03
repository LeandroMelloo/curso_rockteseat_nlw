import knex from 'knex'

const connection = knex({
    client: 'mysql',
    connection: {
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'db_nlw'
  },
  debug: true
})

export default connection