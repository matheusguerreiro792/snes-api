const Rom = require("./Rom.js");
const Image = require("./Image.js");

Rom.hasMany(Image, {
  foreignKey: "romId",
  as: "images",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Image.belongsTo(Rom, { foreignKey: "romId", as: "rom" });

module.exports = { Rom, Image };
