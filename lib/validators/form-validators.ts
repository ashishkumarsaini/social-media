import z from 'zod';

export const signUpFormSchema = z.object({
  username: z.string().min(3, "Username must be atleast 3 characters.").max(20, "Username must be at most 20 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be atleast 8 characters.").max(12, "Password must be at most 12 characters."),
  confirmPassword: z.string().min(8, "Confirm password must be atleast 8 characters.").max(12, "Confirm password must be at most 12 characters.")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be atleast 8 characters.").max(12, "Password must be at most 12 characters."),
});

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;