const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoSchema = new Schema(
  {
    text: { type: String, required: true },
    complete: { type: Boolean, default: false },
  },
  { timestamp: true }
);

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;
