const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: String,
  responsibility: String,
  type: { type: String, enum: ["تعيين", "إعفاء"] },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Note", noteSchema);
