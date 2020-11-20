const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  adress: {
    street: {
      type: String,
      required: false,
      trim: true,
    },
    city: {
      type: String,
      required: false,
      trim: true,
    },
    country: {
      type: String,
      required: false,
      trim: true,
    },
    zipCode: {
      type: Number,
    },
  },
  oib: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  contactPerson: {
    type: String,
    trim: true,
  },
  local: {
    type: Boolean,
    required: true,
  },
  idType: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
