const {GraphQLObjectType} = require('graphql')

const queryLeagueByID = require('./queryLeagueByID')
const queryAllLeagues = require('./queryAllLeagues')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllLeagues,
    queryLeagueByID
  }
})

module.exports = RootQuery