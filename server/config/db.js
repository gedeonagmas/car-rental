const mongoose = require("mongoose");
async function mongodb() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }); //replace by MONGO_URL
  console.log("car database connected successfully");
}

module.exports = mongodb;
