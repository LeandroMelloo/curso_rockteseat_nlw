import path from 'path'

module.exports = {
    client: 'mysql',
    connection: {
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'db_nlw'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  debug: true,
  useNullAsDefault: true,
}