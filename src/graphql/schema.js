const {GraphQLSchema} = require('graphql')

const Mutations = require('./mutations')
const Queries = require('./queries')

module.exports = new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
})