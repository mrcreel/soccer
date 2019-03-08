const{GraphQLObjectType} = require('graphql')

const addLeague = require('./mutations/addLeague')
const removeLeague = require('./mutations/removeLeague')
const updateLeague = require('./mutations/updateLeague')

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addLeague,
    removeLeague,
    updateLeague
  }
})

module.exports = Mutations