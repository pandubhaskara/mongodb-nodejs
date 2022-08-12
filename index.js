const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000; 

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "nodejs server with mongodb is running...",
  });
});

// app.use("/api", router);

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
