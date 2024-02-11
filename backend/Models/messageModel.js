const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: { type: String },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: `User` },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);
module.exports=Message;
