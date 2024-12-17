const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Image = db.define(
  "Image",
  {
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
  },
  {
    db,
    modelName: "Image",
    tableName: "Images",
  }
);

Image.beforeSave((image) => {
  if (image.url) {
    image.url = image.url.trim();
  }
});

module.exports = Image;
