const {
  GraphQLString,
  GraphQLInt
} = require('graphql')

const leagueGraphQLType = require('../leagueType')
const League = require('../../models/league')

module.exports = {
  type: leagueGraphQLType,
  args: {
    name: {type: GraphQLString},
    tier: {type: GraphQLInt},
  },
  resolve(parent, args) {
    const newLeague = new League({
      name: args.name,
      tier: args.tier,
    })
    return newLeague.save()
  }
}
