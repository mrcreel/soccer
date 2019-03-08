const {GraphQLList} = require('graphql')

const leagueGraphQLType = require('../types/leagueType')
const League = require('../../models/league')

module.exports = {
  type: new GraphQLList(leagueGraphQLType),
  args: {},
  resolve() {
    return League.find({})
  }
}