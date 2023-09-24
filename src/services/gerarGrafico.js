const Chart = require('chart.js');
const { getPedidoLI } = require('../repository/getPedidoLI');

async function gerarGrafico() {
  const dados = await getPedidoLI();

  const labels = dados.map((item) => item.label);
  const valores = dados.map((item) => item.valor);

  const ctx = document.getElementById('meuGrafico').getContext('2d');
  const meuGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Vendas por Produto',
          data: valores,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
gerarGrafico();
module.exports = { gerarGrafico };
