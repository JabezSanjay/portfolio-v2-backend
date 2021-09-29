const Student = require("../models/student.js");

exports.createStudent = (req, res) => {
  const student = new Student(req.body);

  student.save((error, student) => {
    if (error || student === undefined) {
      return res.status(400).json({
        status: "Error",
        message: "New student is not created!",
      });
    }
    res.json({
      status: "Success",
      message: `New student is created!`,
      dataId: student._id,
    });
  });
};
