const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();
app.use(cors());

app.use("/api/weather", weatherRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
