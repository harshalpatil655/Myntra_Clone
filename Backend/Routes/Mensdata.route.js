const { Router } = require("express");
const { MensdataModel } = require("../Models/Mensdata.model");

const MensdataRoute = Router();

MensdataRoute.get("/mensdata", async (req, res) => {
  try {
    const data = await MensdataModel.find();
    res.send(data);
  } catch (err) {
    res.send("data failed to get");
  }
});

MensdataRoute.post("/menspost", async (req, res) => {
  try {
    const data = new MensdataModel({
      title: req.body.title,
      subtit: req.body.subtit,
      price: req.body.price,
      offpercentage: req.body.offpercentage,
      image: req.body.image,
      category: req.body.category,
      brand: req.body.brand,
    });
    await data.save();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = { MensdataRoute };
