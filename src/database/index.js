import mongoose from 'mongoose';

const { connect } = mongoose;

export const conectarAoDatabase = () => {
  connect(
    'mongodb+srv://enriquemolina:<845521>@cluster0.y9sez.mongodb.net/elgeladon_db?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then(() => {
      console.log('MongoDB Conectado');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o MongoDB: ${err}`);
    });
};
