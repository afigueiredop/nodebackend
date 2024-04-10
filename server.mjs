// server.mjs

import express from 'express';

const app = express();

app.post('/tasks', (req, res, next) => {
    console.log('chegou um POST');
    res.status(201).end();
})

app.get('/', (req, res) => {
    res.send('Hello Word');
})


app.listen(3000, () => {
    console.log('Node, com express, em execução na porta 3000')
});


import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});




// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
