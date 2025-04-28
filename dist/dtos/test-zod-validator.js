"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestZodDto = exports.testZodDto = void 0;
const zod_1 = require("zod");
exports.testZodDto = zod_1.z.object({
    checknumber: zod_1.z.number({
        invalid_type_error: 'checknumber must be a number',
        required_error: 'checknumber is required',
    }).positive({
        message: 'checknumber must be a positive number',
    }).int().min(1).max(100),
    checkstring: zod_1.z.string({
        invalid_type_error: 'checkstring must be a string',
        required_error: 'checkstring is required',
    }).min(1).max(100),
    checkDateTime: zod_1.z.string({
        invalid_type_error: 'checkDateTime must be a string',
        required_error: 'checkDateTime is required',
    }).refine((val) => !isNaN(Date.parse(val)), {
        message: 'invalid format datetime',
    }),
    checkboolean: zod_1.z.boolean({
        invalid_type_error: 'checkboolean must be a boolean',
        required_error: 'checkboolean is required',
    }),
    checkArray: zod_1.z.array(zod_1.z.string().min(1).max(100)).refine((val) => val.length > 0, {
        message: 'checkArray can not be empty'
    }),
    checkObject: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'name must be a string',
            required_error: 'name is required',
        }).min(1).max(100),
        age: zod_1.z.number({
            invalid_type_error: 'age must be a number',
            required_error: 'age is required',
        }).positive({
            message: 'age must be a positive number',
        }).int().min(1).max(100),
    }),
});
const validateTestZodDto = (body) => {
    const result = exports.testZodDto.safeParse(body);
    if (!result.success) {
        return result.error.errors.map((error) => error.message);
    }
    ;
    return [];
};
exports.validateTestZodDto = validateTestZodDto;
