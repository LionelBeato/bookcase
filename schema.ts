import { buildSchema, } from "https://cdn.pika.dev/graphql/^15.0.0";

const schema = buildSchema(`
   type Query {
       hello: String
   }
`)

export default schema; 