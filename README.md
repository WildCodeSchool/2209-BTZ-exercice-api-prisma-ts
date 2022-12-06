# Exercice API with Prisma and Typescript!

Hi! Here is an exerice for you !
The goal is to build a simple API to manage:
-Books
-Collections
-Users ( Authors )

# Rules

You have to use Prisma, MySQL on Docker and Typescript.

## Setup

First you have to clone this repo :

```
git clone https://github.com/WildCodeSchool/2209-BTZ-exercice-api-prisma-ts
```

and

```
cd 2209-BTZ-exercice-api-prisma-ts
```

Once in the repo folder you have to initialize a new NodeJS application with :

```
npm init -y
```

## Install dependencies

In order to build your application you have to install some dependencies with npm :

- Express
- Express types
- Prisma and Prisma Client / [Documentation here](https://www.prisma.io/docs/getting-started/quickstart)
- Typescript ( dev dependency )
- Ts-node-dev ( dev dependency )

To install a dev dependency, use the -D flag with npm install like :

```
npm install -D typescript ts-node-dev
```

## Scripts

When all the dependencies are setup you will have to create a dev script to launch the development server in the package.json file.

```json
"scripts": {

// add the line below to the script object

"dev": "ts-node-dev index.ts"

}
```

## Init Typescript

In order to initialize typescript in your application you will now have to launch this command :

```
tsc --init
```

This will create a tsconfig.json file in the root folder of your application.

## Start a basic NodeJS/Express Http server

As you now know, Express is a minimal framework.
With Express you can build simple http servers very fast !

First, create a file app.ts like this :

```js
import Express from "express";

import api from "./api";

const app = Express();

app.use(Express.json());

app.get("/", (req, res) => {
  return res.status(200).json("Hello world");
});

app.use("/api/v1", api);

export default app;
```

This file initialize the express aplication.
We will now create an index.ts file who will be the main start point of our application.

```js
import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
```

Once this two files are ready try to launch the application with :

```
npm run dev
```

You should see this in the terminal :

```
Server is running on port 5000 🚀
```

# Prisma init

**Be sure your database is running on docker before going further !**

Now we have to build our database ! Don't be afraid of this step !

Before prisma, we used to build our databases with SQL queries... beurk !!
Now it is way more simple ! Take a look at it !
I don't give you the entire Schema for this application, just a sample, the rest is up to you !

**THIS IS NOT THE SCHEMA FOR THIS APPLICATION, IT IS A SAMPLE**

```js
model  User  {

id  String  @id  @unique  @default(uuid())

name  String

password  String

createdAt  DateTime  @default(now())

updatedAt  DateTime  @updatedAt

posts  Post[]

}

model  Post  {

id  String  @id  @unique  @default(uuid())

title  String

content  String

createdAt  DateTime  @default(now())

updatedAt  DateTime  @updatedAt

category  Category  @relation(fields: [categoryId], references: [id])

categoryId  String

author  User  @relation(fields: [authorId], references: [id])

authorId  String

isDisabled  Boolean  @default(false)

}

model  Category  {

id  String  @id  @unique  @default(uuid())

name  String

createdAt  DateTime  @default(now())

updatedAt  DateTime  @updatedAt

posts  Post[]

}
```

Now you should be able to understand how to build the book API schema.

## Prisma Commands

Once the prisma schema is written, you have to migrate the changes to your database and to generate the prisma client.

Use this command to launch the migrations :

```
npx prisma migrate dev
```

and right after generate the javascript client

```
npx prisma generate
```

**Dont forget to run this two commands if you apply changes to the schema**

## Let's go !

With this simple tutorial you should be able to start building the application, ask me if you have any questions !
( Sorry Tony, my english is not really good ! I did my very best ! )
