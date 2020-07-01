import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {graphql, buildSchema}  from 'https://cdn.pika.dev/graphql@v15.2.0';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const resolver = { hello: () => 'Hello World!' };

const executeSchema = async (query:any) => {
    let result = await graphql(schema, query, resolver);
    return result; 
}

// graphql.graphql(schema, '{hello}', resolver).then((response:any) => {
//     console.log(response);
// });



const router = new Router(); 

// TODO(@LionelBeato): figure out why this function throws and error and fix it! 
router.post("/graphql", async ({request, response}) => {
    if(request.hasBody) {
        console.log(await request.body());
        const body = await request.body();
        const result = await executeSchema(body.value);
        response.body = await executeSchema(body.value); 
        console.log(response.body);
    }
})

const app = new Application();

// app.use((ctx) => {
//     ctx.response.body = "hello world!";
// });
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`starting app!`);
// console.log(executeSchema('{hello}'))
await app.listen({port: 5000});