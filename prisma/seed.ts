import { Book, Collection, User } from "@prisma/client";
import prisma from "./client";
import {
  randEmail,
  randUserName,
  randProductName,
  randJobTitle,
} from "@ngneat/falso";
import bcrypt from "bcryptjs";

type BodyCreate<T> = Omit<T, "createdAt" | "updatedAt" | "id">;
type CreateFakeRessource<T> = () => T;

const getRandomUser = (users: User[]) => {
  const randomIndex = Math.floor(Math.random() * users.length - 1);
  return users[randomIndex];
};

const getRandomCollection = (collections: Collection[]) => {
  const randomIndex = Math.floor(Math.random() * collections.length - 1);
  return collections[randomIndex];
};

// Password: test123
const createFakeUser: CreateFakeRessource<BodyCreate<User>> = () => ({
  email: randEmail(),
  name: randUserName(),
  password: bcrypt.hashSync("test123", 10),
});

const createFakeCollection: CreateFakeRessource<
  BodyCreate<Collection>
> = () => ({
  name: randProductName(),
});

const createFakeBook = (users: User[], collections: Collection[]) => ({
  title: randJobTitle(),
  authorId: getRandomUser(users).id,
  collectionId: getRandomCollection(collections).id,
});

const USER_COUNT = 100;
const COLLECTION_COUNT = 50;
const BOOK_COUNT = 10;

const fakeUsers = Array.from({ length: USER_COUNT }, createFakeUser);
const fakeCollections = Array.from(
  { length: COLLECTION_COUNT },
  createFakeCollection
);

async function main() {
  await prisma.user.createMany({
    data: fakeUsers,
  });

  await prisma.collection.createMany({
    data: fakeCollections,
    skipDuplicates: true,
  });

  const users = await prisma.user.findMany();
  const collections = await prisma.collection.findMany();

  const fakeBooks = Array.from({ length: BOOK_COUNT }, () =>
    createFakeBook(users, collections)
  );

  await prisma.book.createMany({
    data: fakeBooks,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
