const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const morgan = require("morgan");
const compression = require("compression");
const apiResponse = require("./helpers/apiResponse");
const dotenv = require("dotenv");
dotenv.config();

//---------------------------
//Database Connection
//---------------------------
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully Database Connected!");
  })
  .catch((err) => {
    console.log("Database connection failed");
  });
//---------------------------
//Configuration
//---------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(compression());

//---------------------------
//Routes
//---------------------------
app.use("/api/v1", routes);
app.all("*", (req, res) => {
  return apiResponse.notFoundResponse(res, "API Not Found");
});
//---------------------------
//Server Start
//---------------------------
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
