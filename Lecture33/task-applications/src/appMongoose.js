const { connect } = require("mongoose");

const MONGO_URL =
  "mongodb+srv://rashisingh23:Mongo1234@ciphers.8hnjder.mongodb.net";
const DB_NAME = `rashi`;

async function connectDb() {
  try {
    await connect(`${MONGO_URL}/${DB_NAME}`)
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(error.message);
  }
}
connectDb();
