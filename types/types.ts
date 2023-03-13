import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  userName: string;
  steps: string;
  date: Date;
  avatar: string;
}

export interface DataProps {
  data: User[];
}
export type UnitsOfTime = "byDays" | "byHours" | "byMinutes";

// Dashboard types

export interface GraphData {
  x: string;
  y: number;
}
