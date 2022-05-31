const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")
const user = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 255,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 255,
  },
  phone: {
    type: String,
    required: true,
    maxLength: 11,
  },
  userName: {
    type: String,
    required: true,
    maxLength: 30,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 20,
  },
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],

  rate: [{ type: mongoose.Schema.Types.ObjectId, ref: "rate" }],

  report: [{ type: mongoose.Schema.Types.ObjectId, ref: "report" }],

  cv: [{ type: mongoose.Schema.Types.ObjectId, ref: "cv" }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
  role: { type: String, default: "user" },
});
user.plugin(uniqueValidator)

const _User = mongoose.model("user", user);

module.exports = { _User };
