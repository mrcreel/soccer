const Koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')

const schema = require('./graphql/schema')
const initDB = require('./database')

require('dotenv').config()

initDB()

const app = new Koa()

app.listen(process.env.GRAPHQL_PORT)

app.on('error', err => {
  // eslint-disable-next-line no-console
  console.log('server error', err)
})

app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})))