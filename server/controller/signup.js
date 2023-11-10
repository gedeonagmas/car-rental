const { validationResult } = require("express-validator");
const { Signup } = require("./../models/signupModel");
const { upload } = require("./../config/upload");
const cloudinary = require("./../config/cloudinary");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send(errors.array());
  }
  const { firstName, lastName, email, address, phone, password } = req.body;
  if (req.files.profilePic === undefined) {
    await Signup.create({
      firstName,
      lastName,
      email,
      address,
      phone,
      password,
    });
    return res.status(200).json({ message: "account created successfully" });
  } else if (req.files.profilePic) {
    cloudinary.uploader.upload(
      req.files.profilePic[0].path,
      async function (err, result) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .send("something went wrong account not created");
        }
        await Signup.create({
          ...req.body,
          profilePic: result.url,
        });
        return res
          .status(200)
          .json({ message: "Account Created Successfully" });
      }
    );
  }
};
