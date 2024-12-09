const Image = require("../models/Image.js");

const getImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getImages };
