const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://jayesh:jayesh123@cluster0.89umm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = mongoose.connection;