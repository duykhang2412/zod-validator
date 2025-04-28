import { Hono } from "hono";
import TestZodController from "./controller/test-zod.controller";
import { ROUTES } from "./routes/route";
import { serve } from '@hono/node-server'
const app = new Hono();


// app.route(ROUTES.TestZodValidator, TestZodController);
app.route(ROUTES.controller, TestZodController);

const port = 3000
console.log(`Server is running on http://localhost:${port}`);
console.log(`Swagger UI http://localhost:${port}/ui`);
serve({
    fetch: app.fetch,
    port
})
