const { getPedidoLI } = require('../repository/getPedidoLI');

exports.dadosGrafico = async (req, res) => {
  try {
    const dadosGrafico = await getPedidoLI();
    res.render('index.pug', { dadosGrafico });
  } catch (error) {
    res.send('Erro ao gerar gráfico');
  }
};
