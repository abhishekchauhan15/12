const CardInfo = require("../models/CardSchema");

exports.block = async (req, res) => {
  const { position } = req.body;
  if (!position)
    return res.status(401).json({ error: "can not get the position" });

  try {
    const user = await CardInfo.findOne({ position: position });
    if (user) {
      if (user.isBlocked === true) {
        const result = await CardInfo.updateOne(
          { position: position },
          { $set: { isBlocked: false } }
        );
        res.status(200).json({ message: "you unblocked user " });
      } else {
        const result = await CardInfo.updateOne(
          { position: position },
          { $set: { isBlocked: true } }
        );
        res.status(200).json({ message: "you blocked the user" });
      }
    } else res.status(400).json({ error: "User does not exist" });
  } catch (error) {
    console.log(error);
  }
};
