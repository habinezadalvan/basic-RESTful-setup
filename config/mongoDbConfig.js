/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import config from 'config';
import winston from 'winston';

const connectionString = config.get('mongodbUrl');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    winston.info('Successfully connected to MongoBD ....');
  } catch (err) {
    winston.error(err.message);
    // exit the process with failure
    process.exit(1);
  }
};

export default connectToMongoDB;
