const { Router } = require("express");
const CartModel = require("../Models/Cart.model");

const CartRoute = Router();

CartRoute.get("/", async (req, res) => {
  const { userId } = req.body;

  const cartItems = await CartModel.find({ userId });

  if (cartItems) {
    res.send(cartItems);
  } else {
    res.send("Error in getting Cart Data");
  }
});

CartRoute.post("/cartdata", async (req, res) => {
  try {
    const data = new CartModel({
      title: req.body.title,
      subtit: req.body.subtit,
      price: req.body.price,
      offpercentage: req.body.offpercentage,
      image: req.body.image,
      category: req.body.category,
      brand: req.body.brand,
      userId: req.body.userId,
    });
    await data.save();
    res.send(data);
  } catch (err) {
    res.send(error);
  }
});

module.exports = { CartRoute };
