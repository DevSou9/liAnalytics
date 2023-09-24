const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'pug');

function serverConnect() {
  app.listen(port, () => {
    console.log('Servidor rodando na porta');
  });
}

module.exports = { app, serverConnect };
