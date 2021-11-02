import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'

import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import { routes } from './routes'
import { AppError } from '@config/AppError';

const app = express();

app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
         });
      }
  
      console.error(err);
  
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
  });

export { serverHttp, io }