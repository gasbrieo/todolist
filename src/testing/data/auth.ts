import { faker } from "@faker-js/faker";

export const fakeLoginData = () => ({
  email: faker.internet.email(),
  password: faker.internet.password({ length: 12 }),
});
