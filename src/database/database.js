const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/cavaleiros-db', {   /*string de conexão ao mongodb, usando em localhost não sendo online*/
      useNewUrlParser: true,        /* esses dois use faz com que evite problemas na conexão, com a mudança na url */
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb  connect!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDb, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
