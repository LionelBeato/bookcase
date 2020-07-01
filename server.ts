import { Application, Router } from "https://deno.land/x/oak@v5.3.1/mod.ts";
import { graphql, buildSchema, } from "https://cdn.pika.dev/graphql/^15.0.0";
import schema from './schema.ts'
import  Query  from './resolver.ts'


const app = new Application();
const router = new Router(); 

router
  .get("/testing", (ctx) => {
    ctx.response.body = "hello world!";
  })
  .post("/graphql", (ctx) => {
    ctx.response.body = "this works!"; 
  })


  app.use(router.routes());
  app.use(router.allowedMethods());

  await app.listen({port: 8080}); 