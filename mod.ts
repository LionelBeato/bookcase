import { Application, Router, Body } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { graphql, buildSchema }  from 'https://cdn.pika.dev/graphql@v15.2.0';
import schema from './schema.ts'; 
import root from './resolver.ts'
import { parse } from 'https://deno.land/std/flags/mod.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";



const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const resolver = { hello: () => 'Hello World!' };


const executeSchema = (query:any) => {
    let result = graphql(schema, query, root);
    return result; 
}

// graphql.graphql(schema, '{hello}', resolver).then((response:any) => {
//     console.log(response);
// });



const router = new Router(); 
const url:string = `/graphql`;

// these awaits and async are mandatory! 
// otherwise, the promises will not resolve!!! 
router.post(url, async (ctx) => {
    if(ctx.request.hasBody) {
        const body = await ctx.request.body().value;
        const result = await executeSchema(body.query);
        ctx.response.body = result; 
    }
})

const app = new Application();

// app.use((ctx) => {
//     ctx.response.body = "hello world!";
// });
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`starting app!`);
console.log(executeSchema('{hello}'))
await app.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });