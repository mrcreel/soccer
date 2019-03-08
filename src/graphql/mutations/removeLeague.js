const {
  GraphQLID
} = require('graphql')

const leagueGraphQLType = require('../types/leagueType')
const League = require('../../models/league')

module.exports = {
  type: leagueGraphQLType,
  args: {
    id: { type: GraphQLID }
  },
  resolve(parent, args) {
    return League.findByIdAndDelete(args.id).exec()
      .then(league => league.remove())
      .then(deletedLeague => deletedLeague)
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }
}
