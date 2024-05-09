import { z } from 'zod';

export const userRegistrationSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty()
});

export const userLoginSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
});