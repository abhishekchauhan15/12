const express = require("express");
const router = express.Router();
const CardInfo = require("../models/CardSchema");

router.get("/data", async (req, res) => {
  try {
    const cardData = await CardInfo.find();
    res.status(200).json(cardData);
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  //object destructrion
  const {
    name,
    position,
    text,
    description,
    likes,
    views,
    isSaved,
    isFollowed,
    isReport,
    isBlocked,
  } = req.body;
  if (
    (!name,
    !position,
    !text,
    !description,
    !likes,
    !views,
    !isSaved,
    !isFollowed,
    !isReport,
    !isBlocked)
  ) {
    res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const newData = new CardInfo({
      name,
      position,
      text,
      description,
      likes,
      views,
      isSaved,
      isFollowed,
      isReport,
      isBlocked,
    });
    const createData = await newData.save();

    res.status(201).send(createData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});




module.exports = router;
