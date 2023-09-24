function limparColecaoPedidos(db) {
  return db.collection('pedidos').deleteMany({})
    .then((result) => {
      console.log(`${result.deletedCount} documentos removidos com sucesso.`);
    })
    .catch((error) => {
      console.error('Erro ao limpar a coleção de pedidos:', error);
      throw error;
    });
}

module.exports = { limparColecaoPedidos };
