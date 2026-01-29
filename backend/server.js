require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

app.get("/", (req, res) => {
  res.send("Stock Market Analyzer API Running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const stockRoutes = require("./routes/stockRoutes");

app.use("/api/stocks", stockRoutes);