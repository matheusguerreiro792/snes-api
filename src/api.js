const express = require("express");
const api = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

api.use(express.json());

api.use("/", routes);

api.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
