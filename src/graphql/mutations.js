const{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = require('graphql')

const leagueGraphQLType = require('./leagueType')
const League = require('./../models/league')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    addLeague: {
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
    },

    updateLeague: {
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
    },

  }
})

module.exports = Mutation