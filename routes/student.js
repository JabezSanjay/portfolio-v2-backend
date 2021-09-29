const express = require("express");
const router = express.Router();

const { createStudent } = require("../controllers/student");

router.post("/new/student", createStudent);

module.exports = router;
