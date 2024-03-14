const { ObjectId } = require('mongodb')
const { getMongoCollection } = require('../mongodb/mongodb')

const collectionName = "Reservas"


async function encontrarSalasOcupadas(horaInicio, horaFim, dia) {
    if (!horaInicio || !horaFim || !dia) {
        return []
    }
    const collection = await getMongoCollection(collectionName)
    const agregacao = await collection.aggregate([
        {
            $match: {
                dia: Number(dia),
                horaInicio: { $lt: Number(horaFim) },
                horaFim: { $gt: Number(horaInicio) }
            }
        },
        {
            $group: {
                _id: "$idEspaco",
                totalLugaresColetiva: {
                    $sum: {
                        $cond: [{ $eq: ["$tag", "Coletiva"] }, "$numeroLugares", 0]
                    }
                },
                isColetiva: {
                    $max: {
                        $cond: [{ $eq: ["$tag", "Coletiva"] }, true, false]
                    }
                }
            }
        },
        {
            $match: {
                $or: [
                    { isColetiva: false },
                    { isColetiva: true, totalLugaresColetiva: { $gt: 200 } }
                ]
            }
        }

    ]).toArray()
    const idsEspacosOcupados = agregacao.map(item => item._id)
    console.log("Agregacao"+ idsEspacosOcupados)
    return idsEspacosOcupados
}

async function listarEspacosDisponiveis(idsEspacosOcupados, tag = null, capacidade = null) {
    const espacosCollection = await getMongoCollection("Espacos")

    let filtro = idsEspacosOcupados.length > 0 ? {
        _id: { $nin: idsEspacosOcupados.map(id => new ObjectId(id)) }
    } : {}

    if (tag) {
        filtro.tag = tag
    }

    if (capacidade) {
        filtro.capacidade = { $gte: capacidade }
    }

    const pipeline = [
        { $match: filtro },
        {
            $addFields: {
                averageRating: { $ifNull: [{ $avg: "$rating" }, 0] } 
            }
        },
        { $sort: { averageRating: -1 } } 
    ]

    const espacosDisponiveis = await espacosCollection.aggregate(pipeline).toArray()
    return espacosDisponiveis
}

module.exports = { encontrarSalasOcupadas, listarEspacosDisponiveis }