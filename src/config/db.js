require("dotenv").config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env",
});
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    timezone: "-03:00",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connection has been established successfully.");

    console.log("📦 DB:", process.env.DB_NAME);
    console.log("🔐 User:", process.env.DB_USER);
    console.log("🌐 Host:", process.env.DB_HOST);
  })
  .catch((error) => {
    console.error("❌ Unable to connect to the database:", error);

    process.exit(1);
  });

module.exports = sequelize;
