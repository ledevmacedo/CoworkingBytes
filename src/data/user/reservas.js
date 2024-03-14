const { ObjectId } = require('mongodb');
const { getMongoCollection } = require('../mongodb/mongodb');

const collectionName = "Reservas";

async function verReservas(idUsuario) {
    const collection = await getMongoCollection(collectionName);
    // Utilize find com um critério de busca para encontrar reservas pelo idUsuario
    const resultado = await collection.find({ idUsuario: new ObjectId(idUsuario) }).toArray();
    return resultado;
}   

module.exports = { verReservas };
