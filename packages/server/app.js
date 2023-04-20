const dotenv = require("dotenv").config();
const { PORT, DB_URI } = require("./config/constants");
const express = require("express");
const mongoose = require("mongoose");
const { AppError } = require("./middleware/AppError");
const path = require("path");
const cors = require("cors");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const { logger } = require("./middleware/logger");
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
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(`/auth`, require("./routes/authRoutes"));
app.use(`/users`, require("./routes/userRoute"));
app.use(`/tasks`, require("./routes/taskRoute"));
app.use(`/project`, require("./routes/projectsRoute"));

//commenting out for Vercel/Render deployment.
// if (NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.all("*", (req, res, next) => {
//     res.sendFile(
//       path.resolve(__dirname, "../client/build/index.html")
//     );
//   });
// }

app.use(AppError); //use error handler middleware

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.bgBlue)
);
