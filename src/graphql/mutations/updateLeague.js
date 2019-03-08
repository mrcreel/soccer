const {
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require('graphql')

const leagueGraphQLType = require('../types/leagueType')
const League = require('../../models/league')

module.exports = {
  type: leagueGraphQLType,
  args: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    tier: {type: GraphQLInt},
  },
  resolve(parent, args){
    return League.findById(args.id)
      .then(league => {
        league.name = args.name
        league.tier = args.tier

        return league.save()
      })
      .then(updatedLeague => updatedLeague)
    // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }
}