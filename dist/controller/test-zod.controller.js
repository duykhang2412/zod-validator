"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const route_1 = require("../routes/route");
const test_zod_validator_1 = require("../dtos/test-zod-validator");
const TestZodController = new hono_1.Hono();
TestZodController.post(route_1.ROUTES.TestZodValidator, async (c) => {
    try {
        const body = await c.req.json();
        const validationError = (0, test_zod_validator_1.validateTestZodDto)(body);
        if (validationError.length > 0) {
            return c.json({
                ok: false,
                errors: validationError,
            }, 400);
        }
        return c.json({
            ok: true, message: 'success'
        }, 200);
    }
    catch (error) {
        return c.json({ ok: false, error: 'Internal server error' }, 500);
    }
});
exports.default = TestZodController;
