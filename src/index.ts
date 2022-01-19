import { ApolloServer } from "apollo-server";

import { schema } from "./schema";

export const server = new ApolloServer({
  schema,
});

const port = 3000;
const log = console.log;
server.listen({ port }).then(({ url }) => {
  log(`🚀 Server ready at this url ${url}`);
});
