const { MongoClient, ServerApiVersion } = require('mongodb');
const { config } = require('../config');
// const db = require('mongoose');
// const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.vde6448.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.vde6448.mongodb.net/db_blog?retryWrites=true&w=majority`;
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const connect = async () => {
  try {
    await client.connect();
    await client.db('db_blog').command({ ping: 1 });
  } finally {
    await client.close();
  }
};
// db.set('strictQuery', false);
// db.Promise = global.Promise;

// const connect = async () => {
//   try {
//     const connectDB = await db.connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     if (connectDB) {
//       console.log('Connect to database successfully');
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// };

module.exports = connect;
