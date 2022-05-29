const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const company = mongoose.Schema({
  name: {
    type: String,
    maxLength: 255,
    required: true,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
    required: true,
    maxLength: 255,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: false },
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
    },
  ],
});

const job = mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  name: {
    type: String,
    require: true,
    maxLength: 255,
  },
  photo: {
    type: String,
  },
  categories: {
    type: String,
    require: true,
    maxLength: 255,
  },
  level: {
    type: String,
    require: true,
    maxLength: 255,
  },
  salary: {
    type: Number,
  },
  description: {
    type: String,
    maxLength: 600,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, default: "hide" },
});

company.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

job.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

const _Company = mongoose.model("company", company);
const _Job = mongoose.model("job", job);

module.exports = {
  _Company,
  _Job,
};
