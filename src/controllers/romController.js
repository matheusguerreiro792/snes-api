const Rom = require("../models/Rom.js");
const Image = require("../models/Image.js");

const getRoms = async (req, res) => {
  try {
    const roms = await Rom.findAll({
      include: [
        {
          model: Image,
          as: "images",
        },
      ],
    });

    res.json(roms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRom = async (req, res) => {
  const { title, description, year, frontImages, backImages, downloadLink } =
    req.body;

  try {
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

const createImageToRom = async (req, res) => {
  const { romId } = req.params;
  const { url, type, mobile } = req.body;

  try {
    const rom = await Rom.findByPk(romId);
    if (!rom) {
      return res.status(404).json({ message: "Rom not found" });
    }

    const image = await Image.create({
      romId,
      url,
      type,
      mobile,
    });

    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getImagesByRom = async (req, res) => {
  const { romId } = req.params;

  try {
    const images = await Image.findAll({ where: { romId } });

    if (!images.length) {
      return res.status(404).json({ message: "Images not found for this Rom" });
    }

    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateImageByRom = async (req, res) => {
  const { romId, id } = req.params;
  const { url, type, mobile } = req.body;

  try {
    const image = await Image.findByPk(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    await image.update({ url, type, mobile }, { where: { romId } });

    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImageByRom = async (req, res) => {
  const { romId, id } = req.params;

  try {
    const image = await Image.findByPk(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    await image.destroy();

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRom = async (req, res) => {
  const { id } = req.params;

  try {
    const rom = await Rom.findByPk(id, {
      include: [
        {
          model: Image,
          as: "images",
        },
      ],
    });

    if (!rom) {
      return res.status(404).json({ message: "Rom not found" });
    }

    res.json(rom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRom = async (req, res) => {
  const { id } = req.params;
  const { title, description, year, frontImages, backImages, downloadLink } =
    req.body;

  try {
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
  const { id } = req.params;

  try {
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

module.exports = {
  getRoms,
  createRom,
  getRom,
  updateRom,
  deleteRom,
  createImageToRom,
  getImagesByRom,
  updateImageByRom,
  deleteImageByRom,
};
