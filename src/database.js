const mongoose = require('mongoose')

const initDB = () => {
  mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DB}`,
    { useNewUrlParser: true }
  )

  mongoose.connection.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('connected to database')
  })

}

module.exports = initDB