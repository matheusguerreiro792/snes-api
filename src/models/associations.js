const Rom = require("./Rom.js");
const Image = require("./Image.js");

Rom.hasMany(Image, { foreignKey: "romId" });
Image.belongsTo(Rom, { foreignKey: "romId" });

module.exports = { Rom, Image };
