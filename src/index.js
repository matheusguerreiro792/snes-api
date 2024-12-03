require("dotenv").config();
require("./config/db");

const express = require("express");
const app = express();
const romRoutes = require("./routes/romRoutes");

app.use(express.json());
app.use("/api", romRoutes);

app.get("/", (req, res) => {
  res.send("SNES API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
