const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
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
    unique: true,
  },
  contact: {
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
    telephone: {
      type: String,
    },
  },
  local: {
    pdv_o: {
      type: Boolean,
      required: true,
    },
    pdv_number: {
      type: Number,
    },
  },
  idType: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
