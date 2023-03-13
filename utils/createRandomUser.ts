import { faker } from "@faker-js/faker";
import { User } from "../types/types";

export function createRandomUser(): User {
  const userName = faker.name.fullName();
  const steps = faker.random.numeric(4);
  const date = faker.date.recent(7);
  const avatar = faker.image.avatar();

  return {
    userName,
    steps,
    date,
    avatar,
  };
}
