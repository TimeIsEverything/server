import {Schema, connection} from '../mongoose.js'

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

export default connection.model('Task', taskSchema)
