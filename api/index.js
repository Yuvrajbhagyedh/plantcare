const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SAFE health route
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    message: "PlantCare API running on Vercel"
  });
});

// SAFE root route
app.get("/", (req, res) => {
  res.send("PlantCare API is running on Vercel");
});

// ⛔ DO NOT import server.js here yet

module.exports = app;
