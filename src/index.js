require("dotenv").config();
require("./config/db.js");
require ("./models/associations.js");

const express = require("express");
const app = express();
const routes = require("./routes");
const sequelize = require("./config/db.js");

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("SNES API");
});

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
