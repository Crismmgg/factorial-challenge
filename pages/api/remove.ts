import { Collection, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function remove(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  let id = req.query.userId as string;

  try {
    const db = client.db("factorial-db");
    const collection: Collection = db.collection("users");

    await collection.deleteOne({ _id: new ObjectId(id) });
    return res.json({ status: res.status, ok: true });
  } catch (e) {
    console.log(e);
    return res.json({ status: res.status, ok: false });
  }
}
