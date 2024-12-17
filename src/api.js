require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV} || "development"`,
});

require("./config/db.js");
require("./models/associations.js");

const express = require("express");
const app = express();
const routes = require("./routes/index.js");
const db = require("./config/db.js");

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("SNES API");
});

const PORT = process.env.PORT || 3000;

db
  .sync({ force: true })
  .then(() => {
    console.log("Database synced successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
