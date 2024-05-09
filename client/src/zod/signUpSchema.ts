import { z } from 'zod';

export const SignUpSchema = z.object({
    email: z.string().email(),
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    username: z.string().min(3),
    password: z
        .string()
        .min(3)
        .max(20)
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;