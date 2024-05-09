import express from 'express';
import cors from 'cors';
import './database.js';
import apiRouter from './src/api/router.js';

const server = express();
const { PORT } = process.env;

server.use(express.json());
server.use(cors({ origin: true }));
server.use(apiRouter);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
