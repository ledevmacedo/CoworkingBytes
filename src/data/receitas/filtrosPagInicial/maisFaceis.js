const { getMongoCollection } = require("@/data/mongodb/mongodb")

const collectionName = "receitas"

async function procurarReceitasFacilidade() {
    const collection = await getMongoCollection(collectionName)
    const result = await collection.aggregate([
        { 
            $match: {
                dificuldade: { $regex: /^fácil$/i } 
            } 
        },
        { $limit: 10 }, 
        { 
            $project: { 
                _id: 0, 
                titulo: 1,
                fotoReceita: 1 
            } 
        }
    ]).toArray()
    return result
}

module.exports = { procurarReceitasFacilidade }
