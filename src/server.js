/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import cors from 'cors';
import winston from 'winston';
import config from 'config';
import bodyParser from 'body-parser';
import router from './routes';
import { logger } from './logging/config';
import './config/cloudinary';


logger();

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


const version = config.get('version');

app.use(`/api/${version}/`, router);
const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Server is running on port ${port}`));

export default app;
