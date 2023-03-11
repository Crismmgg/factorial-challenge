import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  userName: string;
  steps: string;
  date: Date;
  avatar: string;
}
