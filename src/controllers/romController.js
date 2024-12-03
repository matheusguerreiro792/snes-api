const Rom = require("../models/Rom");

const getRoms = async (req, res) => {
  try {
    const roms = await Rom.findAll();
    res.json(roms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRom = async (req, res) => {
  try {
    const { title, description, year, frontImages, backImages, downloadLink } =
      req.body;
    const rom = await Rom.create({
      title,
      description,
      year,
      frontImages,
      backImages,
      downloadLink,
    });
    res.status(201).json(rom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRoms, createRom };
