// sslt password



// password : lEen8ImWTmzNngIV
// databasename : sslt





import { MongoClient, ServerApiVersion } from "mongodb";
// const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


let cachedClient = null;
let cachedDb = null;


export default async function MongoDBConnection(collectionName){

    if(cachedClient && cachedDb){
        return cachedDb.collection(collectionName);
    }

    const uri = process.env.DB_URI;

}