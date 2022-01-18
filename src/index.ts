import { ApolloServer } from "apollo-server";

import chalk from "chalk";

import { schema } from "./schema";

export const server = new ApolloServer({
  schema,
});

const port = 3000;

server.listen({ port }).then((data) => {
  console.log(data);
  console.log(chalk.green(`🚀 Server ready at ${data.url}`));
});
