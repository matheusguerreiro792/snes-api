const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

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
  downloadLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Rom;
