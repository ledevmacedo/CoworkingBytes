const { MongoClient } = require("mongodb");

const DEFAULT_DB_NAME = "coworking";
const URL = process.env.MONGO_URL ?? `mongodb+srv://bytesCoworking:bytesCoworking@cluster0.10snoo9.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 3000

let client

async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL)
    }
    return client;
  } catch (err) {
    console.log(err)
  }
}

async function getMongoCollection(collectionName, dbName = DEFAULT_DB_NAME) {
    const client = await connectToMongo();
    const db = client.db(dbName);
    return db.collection(collectionName);
}

async function closeMongoConnection() {
  try {
    if (client) {
      await client.close()
      client = null
      console.log("MongoDB connection closed.")
    }
  } catch (err) {
    console.log(err)
  }
}

process.on('SIGINT', async () => {
  await closeMongoConnection()
  process.exit(0)
})

process.on('exit', async () => {
  await closeMongoConnection()
})


module.exports = { getMongoCollection };