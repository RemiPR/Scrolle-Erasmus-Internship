require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Auth micro service");
});

app.listen(PORT, () => {
  console.log(`auth micro-service running on port ${PORT}`);
});
