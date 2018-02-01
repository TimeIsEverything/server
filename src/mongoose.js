import mongoose from 'mongoose'

import settings from './settings.js'

mongoose.Promise = Promise

// create connection
const connection = mongoose.createConnection(settings.db.uri, {
  useMongoClient: true,
})

// monitor connection
connection.on('open', () => console.log(`Connected to ${settings.db.uri}`))
connection.on('error', (error) => console.error(error))

export {
  connection,
  mongoose,
}

export const Schema = mongoose.Schema
