const { ObjectId } = require('mongodb')
const { getMongoCollection } = require('../mongodb/mongodb')


const collectionName = "Reservas"

async function salaEstaDisponivel(idEspaco, horaInicio, horaFim, dia) {
    const collection = await getMongoCollection(collectionName)
    const ocupacao = await collection.findOne({
        idEspaco: new ObjectId(idEspaco),
        dia: new Date(dia), 
        $or: [
            { horaInicio: { $lt: horaFim, $gte: horaInicio } },
            { horaFim: { $gt: horaInicio, $lte: horaFim } }
        ]
    })
    return !ocupacao // Retorna true se não encontrar nenhuma sobreposição, indicando que a sala está disponível
}
async function criarReserva(dados) {
    const disponivel = await salaEstaDisponivel(dados.idEspaco, dados.horaInicio, dados.horaFim, dados.dia)

    if (!disponivel) {
        throw new Error('A sala não está disponível no horário solicitado.')
    }

    const collection = await getMongoCollection(collectionName)
    const reserva = {
        idEspaco: new ObjectId(dados.idEspaco),
        idUsuario: new ObjectId(dados.idUsuario),
        horaInicio: dados.horaInicio,
        horaFim: dados.horaFim,
        tag: dados.tag,
        dia: new Date(dados.dia),
        numeroLugares: dados.numeroLugares,
    }

    const resultado = await collection.insertOne(reserva)
    return resultado
}

module.exports = { criarReserva }
