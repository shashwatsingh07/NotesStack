require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();
// middleware
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

//connect to database
connectDB();

// test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


