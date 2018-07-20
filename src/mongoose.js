import mongoose from 'mongoose'

import settings from './settings.js'

mongoose.Promise = Promise

// create connection
const connection = mongoose.createConnection(settings.db.uri, {
  useMongoClient: true,
})

// monitor connection
connection.on('open', () => console.log(`Connected to ${settings.db.uri}`))
connection.on('error', (error) => {
  if (error.message.indexOf('failed to connect to server') >= 0) {
    // probably: sudo service mongod start
    console.error('Could not connect to mongodb: make sure it is running correctly and check the server details in settings.js.', error)
    console.log(Object.keys(error))
    process.exit(1)
  } else {
    console.error(error)
  }
})

export {
  connection,
  mongoose,
}

export const Schema = mongoose.Schema
