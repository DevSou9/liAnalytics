const { client } = require('./client');

async function disconnectMongodb() {
  try {
    await client.close();
  } catch (error) {
    console.log(`Erro ao disconectar: ${error}`);
    throw error;
  }
}

module.exports = { disconnectMongodb };
