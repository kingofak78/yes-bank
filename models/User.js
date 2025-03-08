const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  aadhar: { type: String, required: true },
  pan: { type: String, required: true },
  dob: { type: Date, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  uniqueId: { type: String, required: true, unique: true },
  entries: [entrySchema]
});

module.exports = mongoose.model('User', userSchema);
