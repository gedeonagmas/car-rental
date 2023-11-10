const express = require("express");
require("express-async-catch");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const app = express();
const mongodb = require("./config/db");

app.use(
  cors({
    origin: ["https://car-rental-client-ivory.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  res.send("hello well come to my car-rental app");
});

mongodb()
  .then(() => {
    app.listen(process.env.PORT, (err) => {
      if (err) console.log(err);
      console.log("car server connected on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
