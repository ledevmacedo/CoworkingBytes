const { getMongoCollection } = require('../mongodb/mongodb');

const collectionName = "Usuarios";

async function procurarUsuario(nomeUsuario) {
    const collection = await getMongoCollection(collectionName);
    const resultado = await collection.findOne({ nomeUsuario: nomeUsuario });
    return resultado;
}

module.exports = { procurarUsuario };
