const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeagueSchema = new Schema({
  name: String,
  tier: Number,
})

module.exports = mongoose.model('League', LeagueSchema)