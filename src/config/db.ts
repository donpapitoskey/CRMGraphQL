//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './config';
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(config.DB_MONGO, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
        });
        console.log('DB conectada');
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit();
    }
};

export default conectarDB;

