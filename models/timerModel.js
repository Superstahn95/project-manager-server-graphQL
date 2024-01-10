const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  endTime: { type: Date, required: true },
});

module.exports = mongoose.model("Timer", timerSchema);
