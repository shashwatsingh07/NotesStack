require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

//connect to database
connectDB();
// middleware
app.use("/api/users", userRoutes);
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

