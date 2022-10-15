import express from 'express';
import router from './routes/index.js';
import db from './db/index.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 8000;

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const start = async () => {
  await db.connect();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/notes', router);
  app.use((err, req, res, next) => {
    if (err && err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        error: true,
        message: err.toString().replace('ValidationError: ', '').split(','),
      });
    }

    res.status(500).json({
      success: false,
      error: true,
      message: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });
};
start();
