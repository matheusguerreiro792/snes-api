const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Image = sequelize.define("Image", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("front", "back"),
    allowNull: false,
  },
  mobile: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Image;
