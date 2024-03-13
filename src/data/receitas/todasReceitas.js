const { getMongoCollection } = require("../mongodb/mongodb");

const collectionName = "receitas";

async function findReceitas() {
    const collection = await getMongoCollection(collectionName);
    const query = {
        $or: [
            { ativa: true }, 
            { ativa: { $exists: false } } 
        ]
    };
    const result = await collection.find(query).toArray();
    return result;
}

module.exports = { findReceitas };
