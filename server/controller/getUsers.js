const { Signup } = require("./../models/signupModel");

exports.getUsers = async (req, res, next) => {
  const user = await Signup.find();
  res.status(200).send(user);
};
