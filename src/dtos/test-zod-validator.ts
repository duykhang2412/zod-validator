import { z } from 'zod';

export const testZodDto = z.object({
    checknumber: z.number({
        invalid_type_error: 'checknumber must be a number',
        required_error: 'checknumber is required',
    }).positive({
        message: 'checknumber must be a positive number',
    }).int().min(1).max(100),

    checkstring: z.string({
        invalid_type_error: 'checkstring must be a string',
        required_error: 'checkstring is required',
    }).min(1).max(100),

    checkDateTime: z.string({
        invalid_type_error: 'checkDateTime must be a string',
        required_error: 'checkDateTime is required',
    }).refine((val) => !isNaN(Date.parse(val)), {
        message: 'invalid format datetime',
    }),

    checkboolean: z.boolean({
        invalid_type_error: 'checkboolean must be a boolean',
        required_error: 'checkboolean is required',
    }),

    checkArray: z.array(z.string().min(1).max(100)).refine((val) => val.length > 0,
        {
            message: 'checkArray can not be empty'
        }),

    checkObject: z.object({
        name: z.string({
            invalid_type_error: 'name must be a string',
            required_error: 'name is required',
        }).min(1).max(100),
        age: z.number({
            invalid_type_error: 'age must be a number',
            required_error: 'age is required',
        }).positive({
            message: 'age must be a positive number',
        }).int().min(1).max(100),
    }),
})
export const validateTestZodDto = (body: any) => {
    const result = testZodDto.safeParse(body);
    if (!result.success) {
        return result.error.errors.map((error) => error.message
        );
    };
    return [];

}