const { Car } = require("../models/carModel");
const { Signup } = require("./../models/signupModel");

exports.freeze = async (req, res, next) => {
  if (req.body.type === "user") {
    await Signup.updateOne({ _id: req.body.id }, { status: req.body.action });
    return res.status(200).json({ msg: "request handle successfully" });
  } else if (req.body.type === "RELEASE_CAR") {
    await Car.updateOne({ _id: req.body.id }, { status: "available" });
    return res.status(200).json({ msg: "request handle successfully" });
  } else if (req.body.type === "HIDE_CAR") {
    await Car.updateOne({ _id: req.body.id }, { active: false });
    return res.status(200).json({ msg: "request handle successfully" });
  } else if (req.body.type === "SHOW_CAR") {
    await Car.updateOne({ _id: req.body.id }, { active: true });
    return res.status(200).json({ msg: "request handle successfully" });
  }
};
