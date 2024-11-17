const sequelize = require("./db");

const User = require("./user");
const Rom = require("./rom");

sequelize.sync({ force: true });

module.exports = { User, Rom };
