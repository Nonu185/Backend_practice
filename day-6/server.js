require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./src/app");

function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.error("Database connection failed:", err);
    });
}

connectToDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
