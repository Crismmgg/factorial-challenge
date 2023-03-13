import { faker } from "@faker-js/faker";
import { Collection, ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

interface createUserProps {
  userName: string;
  steps: string;
}

export async function createUser({ userName, steps }: createUserProps) {
  try {
    const client = await clientPromise;
    const db = client.db("factorial-db");
    const collection: Collection = db.collection("users");
    const currentDate = new Date();

    const result = await collection.insertOne({
      userName,
      steps,
      date: currentDate,
      avatar: faker.image.avatar(),
    });
    return result;
  } catch (e) {
    console.log(e);
    return [];
  }
}
