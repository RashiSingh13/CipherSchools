const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/add", (req, res) => {
  let { a: firstNumber, b: secondNumber } = req.query;
  let sum = parseInt(firstNumber) + parseInt(secondNumber);
  res.send({ sum });
});
app.listen(3000, () => {
  console.log(`Server is no running`);
});
