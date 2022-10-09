const express = require("express");
const router = express.Router();
const CardInfo = require("../models/CardSchema");

const {report}= require("../controllers/report");
const {save}= require("../controllers/save");
const {block}= require("../controllers/block");
const {follow}= require("../controllers/follow");

router.get("/data", async (req, res) => {
  try {
    const cardData = await CardInfo.find();
    res.status(200).json(cardData);
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
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

    res.status(200).send(createData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});


router.post("/report", report);
router.post("/save", save);
router.post("/block", block);
router.post("/follow", follow);

module.exports = router;
