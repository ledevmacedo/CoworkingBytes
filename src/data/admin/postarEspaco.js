const { getMongoCollection } = require("../mongodb/mongodb");


const collectionName = "espacos"


async function verificaSeExiste(ingredientes, modoPreparo) {
    const collection = await getMongoCollection(collectionName);
    const recipe = await collection.findOne({ ingredientes, modoPreparo }) // se necessário
    return !recipe
}


async function inserirEspacoDataBase(ingredientes, quantidades, tempoPreparo, preco, fotoReceita, titulo, dificuldade, calorias, modoPreparo, idUsuario, categoria) {
    const collection = await getMongoCollection(collectionName);
    await collection.insertOne({ ingredientes, quantidades, tempoPreparo, preco, fotoReceita, titulo, dificuldade, calorias, modoPreparo, idUsuario, categoria, likes: [], ativa:false }) // o que vai para a db
}

module.exports = { inserirReceitaDataBase, verificaSeExiste }
