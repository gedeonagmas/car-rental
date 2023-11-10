const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phone: String,
  profilePic: String,
  carPhoto: String,
  model: String,
  mark: String,
  price: String,
  pickDate: String,
  pickTime: String,
  dropDate: String,
  dropTime: String,
  carId: String,
  payed: String,
  status: { type: String, default: "Taken" },
});

exports.Rent = mongoose.model("rent", schema);
