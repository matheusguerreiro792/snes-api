const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Image = sequelize.define("Image", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
      notEmpty: true,
    },
  },
  type: {
    type: DataTypes.ENUM("front", "back"),
    allowNull: false,
    validate: {
      isIn: [["front", "back"]],
      notNull: true,
    },
  },
  mobile: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Image.beforeSave((image) => {
  if (image.url) {
    image.url = image.url.trim();
  }
});

module.exports = Image;
