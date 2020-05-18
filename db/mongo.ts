import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";

// Initialize the plugin
await init();

const client = new MongoClient();
client.connectWithUri(
  "mongodb+srv://dbUser:B3D5571h9C8qOBIl@cluster0-gbqi8.mongodb.net/test?retryWrites=true&w=majority",
);

const db = client.database("screens");

export default db;
