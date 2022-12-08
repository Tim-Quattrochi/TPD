import 'dotenv/config';
import express, { Router } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { api } from './controllers/api.controller';

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

console.log(DB_URI);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Database!'))
  .catch((err) =>
    console.log('An error occurred connecting to the db: ', err)
  );

const app = express();

//middleware here
app.use(express.static(path.join(__dirname, 'public')));

//use the api from api.controller.js
app.use(api);

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);
