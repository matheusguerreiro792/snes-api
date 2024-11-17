const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rom = sequelize.define("rom", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  frontImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  backImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  downloadLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Rom;
