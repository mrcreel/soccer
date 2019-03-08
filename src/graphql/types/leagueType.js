const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = graphql

const LeagueType = new GraphQLObjectType({
  name: 'League',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    tier: {type: GraphQLInt},
  })
})

module.exports = LeagueType