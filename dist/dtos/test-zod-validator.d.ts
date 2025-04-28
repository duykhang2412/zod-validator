import { z } from 'zod';
export declare const testZodDto: z.ZodObject<{
    checknumber: z.ZodNumber;
    checkstring: z.ZodString;
    checkDateTime: z.ZodEffects<z.ZodString, string, string>;
    checkboolean: z.ZodBoolean;
    checkArray: z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>;
    checkObject: z.ZodObject<{
        name: z.ZodString;
        age: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        age: number;
    }, {
        name: string;
        age: number;
    }>;
}, "strip", z.ZodTypeAny, {
    checknumber: number;
    checkstring: string;
    checkDateTime: string;
    checkboolean: boolean;
    checkArray: string[];
    checkObject: {
        name: string;
        age: number;
    };
}, {
    checknumber: number;
    checkstring: string;
    checkDateTime: string;
    checkboolean: boolean;
    checkArray: string[];
    checkObject: {
        name: string;
        age: number;
    };
}>;
export declare const validateTestZodDto: (body: any) => string[];
