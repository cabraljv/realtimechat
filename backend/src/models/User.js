
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  username: String,
  status: {
    type: Boolean,
    default: false,
  },
  passwd: String,
  friends:[{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  friendsRequestSend:[{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  friendsRequestRecived:[{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }]
    
}, {
  timestamps: true,
});

module.exports = model('User', UserSchema);