import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { createRandomUser } from "../../utils/createRandomUser";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("factorial-db");
    const collection = db.collection("users");
    const data = [];

    for (let i = 0; i < 30; i++) {
      data.push(createRandomUser());
    }

    const users = await collection.insertMany(data);
    res.json(users);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
