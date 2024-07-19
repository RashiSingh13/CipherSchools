const { connect } = require("mongoose");

const MONGO_URL =
  "mongodb+srv://rashisingh23:Mongo1234!@ciphers.8hnjder.mongodb.net/?retryWrites=true&w=majority&appName=Ciphers";
const DB_NAME = `cs-mern`;

async function connectDb() {
  try {
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error.message);
  }
}
connectDb();
