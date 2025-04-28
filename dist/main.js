"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const test_zod_controller_1 = __importDefault(require("./controller/test-zod.controller"));
const route_1 = require("./routes/route");
const node_server_1 = require("@hono/node-server");
const app = new hono_1.Hono();
// app.route(ROUTES.TestZodValidator, TestZodController);
app.route(route_1.ROUTES.controller, test_zod_controller_1.default);
const port = 3000;
console.log(`Server is running on http://localhost:${port}`);
console.log(`Swagger UI http://localhost:${port}/ui`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port
});
