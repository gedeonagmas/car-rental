const { Car } = require("./../models/carModel");
const { upload } = require("./../config/upload");
const cloudinary = require("./../config/cloudinary");

exports.addCar = async (req, res, next) => {
  const { model, mark, price, ac, door, transmission, fuel, year } = req.body;
  if (
    !model ||
    !mark ||
    !price ||
    !ac ||
    !door ||
    !transmission ||
    !fuel ||
    !req.files.carPhoto
  ) {
    return res
      .status(400)
      .send("all fields are required. please fill out the form correctly");
  }

  cloudinary.uploader.upload(
    req.files.carPhoto[0].path,
    async function (err, result) {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send("something went wrong account car not added");
      }
      await Car.create({
        carPhoto: result.url,
        model,
        mark,
        price,
        ac,
        door,
        transmission,
        fuel,
        year,
      });
      return res.status(200).json({ message: "car added successfully" });
    }
  );
};
