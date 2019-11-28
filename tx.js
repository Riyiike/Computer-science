const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const deviceInfo = {
  OS: {
    type: String,
    required: true,
    trim: true
  },
  data: {
    brand: {
      type: String,
      required: true,
      trim: true
    },
    models: {
      type: Array,
      default: [],
      required: true
    }
  }
};

const Device = mongoose.model("Device", deviceInfo);

module.exports = Device;
