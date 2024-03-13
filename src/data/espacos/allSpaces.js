const { ObjectId } = require('mongodb'); 
const { getMongoCollection } = require('../mongodb/mongodb');

const collectionName = "Reservas"

async function encontrarSalasOcupadas(horaInicio, horaFim, dia) {
    const collection = await getMongoCollection(collectionName)
    console.log(horaFim, horaInicio,dia)
    const agregacao = await collection.aggregate([
        {
            $match: {
                diaReservado: dia,
                horaInicio: { $lt: horaFim },
                horaFim: { $gt: horaInicio }
            }
        },
        {
            $group: {
                _id: "$idEspaco",
                totalLugares: { $sum: { $cond: [{ $eq: ["$tag", "coletiva"] }, "$numeroLugares", 0] } },
                tags: { $push: "$tag" }
            }
        },
        {
            $match: {
                $or: [
                    { tags: { $ne: "coletiva" } },
                    { totalLugares: 200, tags: { $in: ["coletiva"] } } // Assegura que a lógica se aplique corretamente
                ]
            }
        }
    ]).toArray()

    const idsEspacosOcupados = agregacao.map(item => item._id)
    return idsEspacosOcupados
}
// irá ser usado para obter o que n pode ser mostrado



async function listarEspacosDisponiveis(idsEspacosOcupados, tag = null, capacidade = null) {
    const espacosCollection = await getMongoCollection("Espacos");

    // Constrói o filtro inicial para excluir os espaços ocupados
    let filtro = { 
        _id: { $nin: idsEspacosOcupados.map(id => new ObjectId(id)) }
    };

    // Se a tag for fornecida e não for null, adiciona ao filtro
    if (tag) {
        filtro.tag = tag;
    }

    // Se a capacidade for fornecida e não for null, adiciona ao filtro
    if (capacidade) {
        filtro.capacidade = { $gte: capacidade }; // Assumindo que 'capacidade' refere-se à capacidade mínima requerida
    }

    const espacosDisponiveis = await espacosCollection.find(filtro).toArray();
    return espacosDisponiveis;
}

module.exports = { encontrarSalasOcupadas, listarEspacosDisponiveis }