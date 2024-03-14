const { getMongoCollection } = require("../mongodb/mongodb")
const { ObjectId } = require('mongodb')

const collectionName = "Espacos"

async function encontrarEspaco(idEspaco) {
    const collection = await getMongoCollection(collectionName)
    const espaco = await collection.findOne({_id: new ObjectId(idEspaco)})
    return espaco
}

module.exports = { encontrarEspaco }