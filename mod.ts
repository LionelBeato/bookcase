import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { graphql, buildSchema }  from 'https://cdn.pika.dev/graphql@v15.2.0';
import schema from './schema.ts'; 
import root from './resolver.ts'
import { parse } from 'https://deno.land/std/flags/mod.ts';


const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(Deno.args).port;

const resolver = { hello: () => 'Hello World!' };


const executeSchema = async (query:any) => {
    let result = await graphql(schema, query, root);
    return result; 
}

// graphql.graphql(schema, '{hello}', resolver).then((response:any) => {
//     console.log(response);
// });



const router = new Router(); 

// success! got this post method to work! 
// the initial problem was related to me simply passing in `body.value`
// instead of `body.value.query`
router.post("/graphql", async ({request, response}) => {
    if(request.hasBody) {
        console.log(await request.body());
        const body = await request.body();
        const result = await executeSchema(body.value.query);
        response.body = await executeSchema(body.value.query); 
        console.log(await executeSchema(body.value.query));
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
await app.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });