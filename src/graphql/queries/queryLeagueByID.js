const {GraphQLID} = require('graphql')

const leagueGraphQLType = require('../types/leagueType')
const League = require('../../models/league')

module.exports = {
  type: leagueGraphQLType,
  args: {id: {type: GraphQLID}},
  resolve(parents, args) {
    return League.findById(args.id)
  }
}