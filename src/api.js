require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const romRoutes = require("./routes/romRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/roms", romRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
  });
});
