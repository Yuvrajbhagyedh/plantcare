const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// reuse existing routes
require("../api")(app);
require("../auth")(app);

app.get("/", (req, res) => {
  res.send("PlantCare API is running on Vercel");
});

module.exports = app;
