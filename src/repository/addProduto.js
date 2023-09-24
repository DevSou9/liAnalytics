const axios = require('axios');

const apiUrl = 'https://api.awsli.com.br/v1/produto';

const chaveApi = '';
const chaveAplicacao = '';

function addProduto() {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `chave_api ${chaveApi} aplicacao ${chaveAplicacao}`,
  };

  const requestBody = {
    id_externo: null,
    sku: 'prod-009',
    mpn: null,
    ncm: null,
    nome: 'Produto teste novo',
    apelido: 'produto-teste-novo',
    descricao_completa: '<strong>Desctição HTML do produto</strong>',
    ativo: false,
    destaque: false,
    peso: 0.45,
    altura: 2,
    largura: 12,
    profundidade: 6,
    tipo: 'normal',
    usado: false,
    categorias: [
      '/api/v1/categoria/15246059/',
    ],
    marca: '/api/v1/marca/18139613/',
    removido: false,
  };
  axios.post(apiUrl, requestBody, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = { addProduto };
