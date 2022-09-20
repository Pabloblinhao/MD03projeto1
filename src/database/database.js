const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {   /*string de conexão ao mongodb, usando em localhost não sendo online*/
      useNewUrlParser: true,        /* esses dois use faz com que evite problemas na conexão, com a mudança na url */
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb  Atlas Connect!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDb, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
