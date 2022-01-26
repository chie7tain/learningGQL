import { ApolloServer } from "apollo-server";
// enable the use of the offline version of the appollo server
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { schema } from "./schema";

export const server = new ApolloServer({
  schema,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = 3000;
const log = console.log;
server.listen({ port }).then(({ url }) => {
  log(`🚀 Server ready at this url ${url}`);
});
