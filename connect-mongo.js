const mongoose = require("mongoose");
const DB_NAME = "CRUD";
const connectionString = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(
  connectionString,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Can not to mongoDB");
    } else {
      console.log("Connected to mongoDB!");
    }
  }
);
