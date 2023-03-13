import { Collection } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  let user = req.body.user;

  try {
    const db = client.db("factorial-db");
    const collection: Collection = db.collection("users");

    await collection.insertOne(user);
    return res.json({ status: res.status, ok: true });
  } catch (e) {
    console.log(e);
    return res.json({ status: res.status, ok: false });
  }
}
