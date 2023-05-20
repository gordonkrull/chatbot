import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 8080;

const chatMessageRouter = require('./routes/chatMessages')

app.use('/chat-messages', chatMessageRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
  
