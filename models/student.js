const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email is requried!"],
      unique: [true, "Email is already taken!"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
