
const { Schema, model } = require('mongoose')

const MessageSchema = new Schema({
  content: String,
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

module.exports = model('Message', MessageSchema);