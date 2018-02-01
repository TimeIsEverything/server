import {Schema, connection} from '../mongoose.js'

const taskSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    index: true,
  },
  task: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true,
  },
})

export default connection.model('Task', taskSchema)
