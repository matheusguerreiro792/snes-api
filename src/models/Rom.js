const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rom = sequelize.define("Rom", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  frontImages: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      len: {
        args: [1, 2],
        msg: "Rom must have at least 1 front image and at most 2 front images",
      },
    },
  },
  backImages: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      len: {
        args: [1, 2],
        msg: "Rom must have at least 1 back image and at most 2 back images",
      },
    },
  },
  downloadLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Rom;
