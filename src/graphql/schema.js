const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
} = require('graphql')

const Mutations = require('./mutations')

const League = require('../models/league')
const leagueGraphQLType = require('./leagueType')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    league: {
      type: leagueGraphQLType,
      args: {id: {type: GraphQLID}},
      resolve(parents, args) {
        return League.findById(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})