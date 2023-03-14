import { Collection } from "mongodb";
import clientPromise from "../../lib/mongodb";

export async function getUsersData<T>(): Promise<T[]> {
  try {
    const client = await clientPromise;
    const db = client.db("factorial-db");
    const collection: Collection = db.collection("users");

    const data = await collection.find({}).toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.log(e);
    return [];
  }
}
