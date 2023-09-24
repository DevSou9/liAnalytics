const { getPedidoLI } = require('./getPedidoLI');
const { connectMongodb } = require('../mongoDB/connectMongoDB');
const { disconnectMongodb } = require('../mongoDB/disconnectMongoDB');

function inserirDados(dataInicial, dataFinal) {
  return getPedidoLI(dataInicial, dataFinal)
    .then((dados) => connectMongodb()
      .then((db) => db.collection('pedidos').insertMany(dados))
      .then((result) => {
        console.log(`${result.insertedCount} documentos inseridos com sucesso.`);
        disconnectMongodb();
      })
      .catch((error) => {
        console.error('Erro ao conectar ou inserir os dados:', error);
        throw error;
      }))
    .catch((error) => {
      console.error('Erro ao obter os dados:', error);
      throw error;
    });
}

module.exports = { inserirDados };
