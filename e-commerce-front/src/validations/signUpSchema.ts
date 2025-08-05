import z from 'zod';

// type="text", to handle it by using
//  react form hook rather than browser validation
// name, to access this input field and handle it in backend

// z.string() as a data-type to this field
// refine it's provide around schema definition

const signUpSchema = z.object({
    firstName:z.string().min(1,{message:"First name is required"}),
    lastName:z.string().min(1,{message:"Last name is required"}),
    email:z.string().min(1,{message:"Email is required"}).email(),
    password: z.string().min(4,{message:"password must be at least 4 character"})
        .regex(/.*[!@#$%^&*() _+{}|[\]\\:";'<>?,./].*/,{
            message:"password must be at contain at least one character"
        }),

    confirmPassword:z.string().min(1,{message:"Confirm Password is required"})
}).refine((input) => input.password === input.confirmPassword,{
    message:"Password not matched successfully",
    // path as where would you like to show this error when happen
    path:["confirmPassword"]
})

// z.infer<typeof signUpSchema>: to extract all data + type to each one
type TFormInputs = z.infer<typeof signUpSchema>

// This section: [ formState:{errors} ], to get error once happen.

// isInvalid={errors.firstName?.message ? true : false}
// Same: isInvalid={!!errors.firstName?.message}

//  mode:"onBlur", that be when user add few of data then move into another section, show this error
export { signUpSchema, type TFormInputs }