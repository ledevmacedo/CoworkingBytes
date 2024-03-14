const { ObjectId } = require('mongodb')
const { getMongoCollection } = require('../mongodb/mongodb')

const collectionName = "Reservas"

// irá ser usado para obter o que n pode ser mostrado
async function encontrarSalasOcupadas(horaInicio, horaFim, dia) {
    console.log("valores salas Ocupadas (horaFim,horaInicio,dia)" + typeof (horaFim), horaInicio, dia) // aqui tenho valores
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
                // Se for "Coletiva" e a soma dos lugares for 200 ou mais, exclui do resultado
                // Caso contrário, inclui (inclui todos que não são "Coletiva" independentemente da soma de lugares)
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

    let filtro = {
        _id: { $nin: idsEspacosOcupados.map(id => new ObjectId(id)) }
    }

    // Se a tag for fornecida e não for null, adiciona ao filtro
    if (tag) {
        filtro.tag = tag
    }

    // Se a capacidade for fornecida e não for null, adiciona ao filtro
    if (capacidade) {
        filtro.capacidade = { $gte: capacidade }
    }

    const espacosDisponiveis = await espacosCollection.find(filtro).toArray()
    return espacosDisponiveis
}

module.exports = { encontrarSalasOcupadas, listarEspacosDisponiveis }