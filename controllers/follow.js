const CardInfo = require("../models/CardSchema");

exports.follow = async (req, res) => {
  const { position } = req.body;
  if (!position)
    return res.status(401).json({ error: "can not get the position" });

  try {
    const user = await CardInfo.findOne({ position: position });
    if (user) {
      if (user.isFollowed === true) {
        const result = await CardInfo.updateOne(
          { position: position },
          { $set: { isFollowed: false } }
        );
        res.status(200).json({ message: "you unfollowed the user  " });
      } else {
        const result = await CardInfo.updateOne(
          { position: position },
          { $set: { isFollowed: true } }
        );
        res.status(200).json({ message: "you started following the user" });
      }
    } else res.status(400).json({ error: "User does not exist" });
  } catch (error) {
    console.log(error);
  }
};
