import z from 'zod';

const signInSchema = z.object({
    email:z.string().min(1,{message:"Email is required"}).email(),
    password: z.string().min(4,{message:"password must be at least 4 character"})
    .regex(/.*[!@#$%^&*() _+{}|[\]\\:";'<>?,./].*/,{
        message:"password must be at contain at least one character"
    }),
})


type TFormInputs = z.infer<typeof signInSchema>
export { signInSchema, type TFormInputs }