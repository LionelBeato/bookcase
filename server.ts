import { Application, Router } from "https://deno.land/x/oak@v5.3.1/mod.ts";
import { graphql, buildSchema, } from "https://cdn.pika.dev/graphql/^15.0.0";
import  root  from './resolver.ts'

const schema = buildSchema(`
   type Query {
       hello: String
   }
`);



const app = new Application();
const router = new Router(); 

const resolver = { hello: () => 'Hello World!' };

const executeSchema = async (query:any) => {
  const result = await graphql(schema, query, resolver);   
  return result;
}

router
  .get("/testing", (ctx) => {
    ctx.response.body = "hello world!";
  })
  .post("/graphql", async (ctx) => {
    if(ctx.request.hasBody) {
      const body = await ctx.request.body();
      const result = await executeSchema(body.value);
      ctx.response.body = result;  
    } else {
      response.body = "Query Unknown!";
    }
  })


  app.use(router.routes());
  app.use(router.allowedMethods());

  await app.listen({port: 8080}); 