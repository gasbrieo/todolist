import { faker } from "@faker-js/faker";

export const fakeLoginData = () => ({
  email: faker.internet.email(),
  password: faker.internet.password({ length: 12 }),
});

export const fakeRegisterData = () => ({
  username: faker.internet.username(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 12 }),
});

export const fakeResetPasswordData = () => ({
  email: faker.internet.email(),
});

export const fakeUpdatePasswordData = () => ({
  password: faker.internet.password({ length: 12 }),
});
