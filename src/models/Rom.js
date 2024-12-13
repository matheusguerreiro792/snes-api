const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Rom = db.define("Rom", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1990,
      max: 2003,
    },
  },
  downloadLink: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
});

Rom.beforeSave((rom) => {
  if (rom.title) {
    rom.title = rom.title.trim();
  }
  if (rom.description) {
    rom.description = rom.description.trim();
  }
  if (rom.downloadLink) {
    rom.downloadLink = rom.downloadLink.trim();
  }
});

module.exports = Rom;
