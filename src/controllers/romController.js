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

const getRom = async (req, res) => {
  try {
    const rom = await Rom.findByPk(req.params.id);
    res.json(rom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRom = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, year, frontImages, backImages, downloadLink } =
      req.body;
    const rom = await Rom.findByPk(id);

    if (!rom) {
      return res.status(404).json({ message: "Rom not found" });
    }

    await rom.update({
      title,
      description,
      year,
      frontImages,
      backImages,
      downloadLink,
    });

    res.json(rom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRom = async (req, res) => {
  try {
    const { id } = req.params;
    const rom = await Rom.findByPk(id);

    if (!rom) {
      return res.status(404).json({ message: "Rom not found" });
    }

    await rom.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRoms, createRom, getRom, updateRom, deleteRom };
