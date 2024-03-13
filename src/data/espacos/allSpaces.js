const { getMongoCollection } = require("../mongodb/mongodb");

const collectionName = "espacos";

async function findSpaces() {
    const collection = await getMongoCollection(collectionName);
    const query = {
        $or: [
            //sem filtro
        ]
    }
    const result = await collection.find().toArray();
    return result
}

module.exports = { findSpaces };
