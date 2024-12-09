const Rom = require("./Rom.js");
const Image = require("./Image.js");

Rom.hasMany(Image, { foreignKey: "romId", as: "Images" });
Image.belongsTo(Rom, { foreignKey: "romId" });

module.exports = { Rom, Image };
