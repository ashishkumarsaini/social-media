import z from 'zod';

// sign up schema
export const signUpFormSchema = z.object({
  username: z.string().min(3, "Username must be atleast 3 characters.").max(20, "Username must be at most 20 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be atleast 8 characters.").max(20, "Password must be at most 20 characters."),
  confirmPassword: z.string().min(8, "Confirm password must be atleast 8 characters.").max(20, "Confirm password must be at most 20 characters.")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;

// log in schema
export const loginFormSchema = z.object({
  username: z.string().min(3, "Username must be atleast 3 characters.").max(20, "Username must be at most 20 characters."),
  password: z.string().min(8, "Password must be atleast 8 characters.").max(20, "Password must be at most 20 characters."),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
