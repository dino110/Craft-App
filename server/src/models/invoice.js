const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: newDate(),
  },
  client: {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    adress: {
      type: String,
      trim: true,
      required: true,
    },
    oib: {
      type: Number,
    },
  },
  bill_items: {
    service_product: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
