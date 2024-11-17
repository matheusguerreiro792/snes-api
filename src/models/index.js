const sequelize = require("../config/db");

const { User, Rom } = require("../models");

sequelize.sync({ force: true });

module.exports = { User, Rom };
