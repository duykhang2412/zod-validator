import { Hono } from 'hono';
import { ROUTES } from '../routes/route';
import { validateTestZodDto } from '../dtos/test-zod-validator';
const TestZodController = new Hono();

TestZodController.post(
    ROUTES.TestZodValidator, async (c) => {
        try {
            const body = await c.req.json();
            const validationError = validateTestZodDto(body);
            if (validationError.length > 0) {
                return c.json({
                    ok: false,
                    errors: validationError,
                }, 400);
            }

            return c.json({
                ok: true, message: 'success'
            }, 200);
        } catch (error) {
            return c.json({ ok: false, error: 'Internal server error' }, 500);
        }
    });


export default TestZodController;