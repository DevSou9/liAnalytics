const { serverConnect, app } = require('./server');
const { dadosGrafico } = require('./src/controllers/dadosGrafico');

app.get('/', dadosGrafico);

serverConnect();
