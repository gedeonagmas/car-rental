const mongoose = require("mongoose");
async function mongodb() {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }); //replace by MONGO_URL
  console.log("car database connected successfully");
}

module.exports = mongodb;
