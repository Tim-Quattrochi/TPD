import "dotenv/config";
import express, { Router } from "express";
import mongoose from "mongoose";
import { AppError } from "./middleware/AppError";
import path from "path";
import cors from "cors";
import colors from "colors";
import cookieParser from "cookie-parser";
import { logger } from "./middleware/logger";
import corsOptions from "./config/corsOpt";
import credentials from "./middleware/credentials";
import { API_URL, DB_URI, PORT } from "./config/constants";

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

app.use(logger);
app.use(credentials);
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

app.use(AppError); //use error handler middleware

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.all("*", (req, res, next) => {
    res.sendFile(
      path.resolve(__dirname, "../client/build/index.html")
    );
  });
}

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.bgBlue)
);
