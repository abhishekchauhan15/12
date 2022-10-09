const CardInfo = require("../models/CardSchema");

exports.report = async (req, res) => {
  const { position } = req.body;
  if (!position)
    return res.status(401).json({ error: "can not get the position" });

  try {
    const user = await CardInfo.findOne({ position: position });
    if (user) {
      const result = await CardInfo.updateOne(
        { position: position },
        { $set: { isReport: true } }
      );
      res.status(200).json({ message: "you reportd this account " });
    } else res.status(400).json({ error: "User does not exist" });
  } catch (error) {
    console.log(error);
  }
};
