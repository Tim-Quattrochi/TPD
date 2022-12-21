import 'dotenv/config';
import express, { Router } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import colors from 'colors';
import { AppError } from './middleware/appError';
import cookieParser from 'cookie-parser';
import { logger } from './middleware/logger';
import corsOptions from './config/corsOpt';
import credentials from './middleware/credentials';


const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Database!'.cyan.underline))
  .catch((err) =>
    console.log(
      'An error occurred connecting to the db: '.red.underline.bold,
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(AppError);

//routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/users', require('./routes/userRoute'));
app.use('/api/v1/tasks', require('./routes/taskRoute'));
app.use('/api/v1/project', require('./routes/projectsRoute'));

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.bgBlue)
);
