/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import cors from 'cors';
import winston from 'winston';
import config from 'config';
import router from './routes';
import connectToMongoDB from '../config/mongoDbConfig';


const app = express();

connectToMongoDB();

app.use(express.json({ extended: false }));
app.use(cors());

const version = config.get('version');

app.use(`/api/${version}/`, router);
const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Server is running on port ${port}`));

export default app;
