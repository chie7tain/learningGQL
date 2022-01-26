import {objectType} from "nexus";
// object type is used to create a new type in the GQL schema
export const Link = objectType({
  name:"Link",
  definition(t){
    t.nonNull.int("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
  }
})