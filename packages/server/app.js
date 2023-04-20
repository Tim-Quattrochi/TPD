const dotenv = require("dotenv").config();
const {
  API_URL,
  NODE_ENV,
  PORT,
  DB_URI,
} = require("./config/constants");
const express = require("express");
const mongoose = require("mongoose");
const { AppError } = require("./middleware/AppError");
const path = require("path");
const cors = require("cors");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const { logger } = require("./middleware/logger");
const corsOptions = require("./config/corsOpt");
const credentials = require("./middleware/credentials");

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database!".cyan.underline))
  .catch((err) =>
    console.log(
      "An error occurred connecting to the db: ".red.underline.bold,
      err
    )
  );

const app = express();

//middleware here

app.use(credentials);
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(`${API_URL}/auth`, require("./routes/authRoutes"));
app.use(`${API_URL}/users`, require("./routes/userRoute"));
app.use(`${API_URL}/tasks`, require("./routes/taskRoute"));
app.use(`${API_URL}/project`, require("./routes/projectsRoute"));

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.all("*", (req, res, next) => {
    res.sendFile(
      path.resolve(__dirname, "../client/build/index.html")
    );
  });
}

app.use(AppError); //use error handler middleware

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.bgBlue)
);
