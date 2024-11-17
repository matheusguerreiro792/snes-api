const { Rom } = require("../models");

module.exports = {
  createRom: async (req, res) => {
    try {
      const { title, frontImage, backImage, downloadLink } = req.body;
      const rom = await Rom.create({
        title,
        frontImage,
        backImage,
        downloadLink,
      });
      res.status(201).json(rom);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getRoms: async (req, res) => {
    try {
      const roms = await Rom.findAll();
      res.json(roms);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateRom: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, frontImage, backImage, downloadLink } = req.body;
      const rom = await Rom.findByPk(id);
      if (!rom) return res.status(404).json({ error: "Rom not found" });
      await rom.update({ title, frontImage, backImage, downloadLink });
      res.json(rom);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteRom: async (req, res) => {
    try {
      const { id } = req.params;
      const rom = await Rom.findByPk(id);
      if (!rom) return res.status(404).json({ error: "Rom not found" });
      await rom.destroy();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
