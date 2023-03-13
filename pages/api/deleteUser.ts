import { Collection, ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export async function deleteUser(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db("factorial-db");
    const collection: Collection = db.collection("users");

    await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (e) {
    console.log(e);
    return [];
  }
}
