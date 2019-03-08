const {GraphQLObjectType} = require('graphql')

const queryAllLeagues = require('../graphql/queries/queryAllLeagues')
const queryLeagueByID = require('../graphql/queries/queryLeagueByID')

const Queries = new GraphQLObjectType({
  name: 'Query',
  fields: {
    queryAllLeagues,
    queryLeagueByID,
  }
})

module.exports = Queries