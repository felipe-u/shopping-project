const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://felipe:w7S8VAwBcx4hmoxP@cluster0.c3h4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connection established!");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;