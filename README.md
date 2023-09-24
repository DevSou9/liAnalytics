# lianalytics

# Ecommerce Analytics


Análise de Dados de Pedidos em E-commerce

Este projeto tem como objetivo coletar dados de pedidos de um e-commerce, armazená-los em um banco de dados MongoDB e gerar gráficos para análise dos dados. Através dessa solução, e-commerces e seus gestores podem ter insights valiosos sobre o desempenho de suas lojas, possibilitando uma tomada de decisão mais certeira e estratégica.


Funcionalidades 

Coleta de Dados de Pedidos: O sistema realiza a coleta de dados de pedidos realizados em uma loja virtual, incluindo informações sobre clientes, valores de pedidos, produtos vendidos e status de aprovação.

Armazenamento no MongoDB: Os dados coletados são armazenados de forma organizada e segura em um banco de dados MongoDB hospedado na plataforma Atlas, permitindo o acesso rápido e confiável aos dados.

Geração de Gráficos Personalizados: Com base nos dados coletados, o projeto é capaz de gerar gráficos e relatórios personalizados. Neste momento, o projeto já apresenta um gráfico de vendas por produto, mas é possível expandir essa funcionalidade para gerar outros tipos de gráficos relevantes para cada e-commerce.


Benefícios para E-commerces e Gestores

Análise de Desempenho: Com os gráficos gerados pelo projeto, e-commerces podem analisar o desempenho de vendas ao longo do tempo, identificar produtos mais populares e entender a sazonalidade de suas vendas.

Identificação de Oportunidades: Através da análise dos dados, gestores podem identificar oportunidades de melhorias em suas estratégias de marketing, precificação de produtos e gerenciamento de estoque.

Acompanhamento de Metas: Ao analisar os dados de vendas em relação às metas estabelecidas, os gestores podem acompanhar o progresso e a eficácia de suas estratégias.

Visão Holística do Negócio: O projeto oferece uma visão holística do negócio, permitindo que e-commerces tenham uma compreensão mais abrangente de seu público, produtos e desempenho geral.


Possibilidades de Expansão

Além das funcionalidades já implementadas, há várias possibilidades de expansão para tornar este projeto ainda mais poderoso e relevante para e-commerces:

Análise de Dados em Tempo Real: Implementar a coleta e análise de dados em tempo real, permitindo uma visão atualizada e dinâmica do desempenho da loja.

Integração com Plataformas de Pagamento: Integrar o projeto com plataformas de pagamento para analisar métricas financeiras, como taxas de conversão e ticket médio.

Segmentação de Clientes: Desenvolver funcionalidades de segmentação de clientes para identificar grupos específicos de consumidores e entender melhor suas preferências.

Acompanhamento de Indicadores-chave de Desempenho (KPIs): Implementar métricas-chave para monitorar o desempenho geral do e-commerce, como taxa de conversão, taxa de abandono de carrinho e taxa de recompra.


Contribua para o Projeto

Este projeto é de código aberto e está sob a Licença MIT, o que significa que você pode contribuir com novas funcionalidades, correções de bugs e melhorias. Sinta-se à vontade para fazer um fork do repositório, criar pull requests ou abrir issues para discutir novas ideias.


## Instalação

1. Certifique-se de ter o [Node.js](https://nodejs.org/).

2. Clone este repositório:

```bash
git clone https://github.com/DevSou9/liAnalytics.git

3. Acesse a pasta do projeto:

    cd ecommerce-analytics

4. Instale as dependências:

    npm install


Configuração

Antes de executar o projeto, é necessário configurar algumas variáveis de ambiente. Renomeie o arquivo .env.example para .env e preencha as seguintes informações:

    URIMONGODB=URL_do_seu_MongoDB_Atlas


Execução

Para executar o projeto, utilize o seguinte comando:

    npm start


Funcionalidades

getPedidoLI(dataInicial, dataFinal): Função para obter os dados dos pedidos de um arquivo local chamado pedidosJSON.json. Os dados são retornados como uma Promise.

conectarMongoDB(): Função para conectar-se ao banco de dados MongoDB. Retorna uma Promise com a conexão estabelecida.

desconectarMongoDB(): Função para fechar a conexão com o banco de dados MongoDB.

limparColecaoPedidos(db): Função para limpar a coleção de pedidos no banco de dados MongoDB.

inserirDados(dataInicial, dataFinal): Função para obter os dados dos pedidos e inseri-los no banco de dados MongoDB.

gerarGrafico(): Função para gerar um gráfico utilizando a biblioteca Chart.js com os dados dos pedidos salvos no banco de dados MongoDB.


Contribuição

Se deseja contribuir com este projeto, fique à vontade para abrir issues ou enviar pull requests. Toda ajuda é bem-vinda!


Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).


Desenvolvido por W S Souza