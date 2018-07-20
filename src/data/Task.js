import {Schema, connection} from '../mongoose.js'

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  test: {
    type: String,
  },
})

export default connection.model('Task', taskSchema)
