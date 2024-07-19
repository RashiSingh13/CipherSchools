require("./appMongoose");
const Task = require("./models/Task");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("this is some response");
});

app.get("/add", (req, res) => {
  let { a: firstNumber, b: secondNumber } = req.query;
  let sum = parseInt(firstNumber) + parseInt(secondNumber);
  res.send({ sum });
});

app.post("/add-task", async (req, res) => {
  try {
    const task = new Task({
      title: "Test Task",
      description: "Test Task Desc",
    });
    await task.save();
    return res.status(201).send({ message: "Saved!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "An error occurred while saving the task." });
  }
});

app.get("/get-tasks", async (req, res) => {
  const taskList = await Task.find();
  return res.status(200).send(taskList);
});
app.listen(8080, () => {
  console.log(`Server is running`);
});
