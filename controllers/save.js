const CardInfo = require("../models/CardSchema");

exports.save = async (req, res) => {
  const { position } = req.body;
  if (!position)
    return res.status(401).json({ error: "can not get the position" });

  try {
    const user = await CardInfo.findOne({ position: position });
    if (user) {
      if (user.isSaved === true) {
        const result = await CardInfo.updateOne(
          { position: position },
          { $set: { isSaved: false } }
        );
        res.status(200).json({ message: "unsaved" });
      } else {
        const result = await CardInfo.updateOne(
          { position: position },
          { $set: { isSaved: true } }
        );
        res.status(200).json({ message: "post saved" });
      }
    } else res.status(400).json({ error: "User does not exist" });
  } catch (error) {
    console.log(error);
  }
};
