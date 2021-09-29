const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const studentRoutes = require("./routes/student");

//Middlewares
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));

const productionDb = process.env.DATABASE;

//DB connection
mongoose
  .connect(productionDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

//Routes
app.use("/api", studentRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
