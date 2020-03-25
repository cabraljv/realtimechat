
const { Schema, model } = require('mongoose')

const MenssageSchema = new Schema({
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

module.exports = model('Menssage', MenssageSchema);