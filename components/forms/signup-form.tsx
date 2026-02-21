'use client';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { signUpFormSchema, type SignUpFormSchemaType } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/lib/services";
import { toast } from "sonner";

export const SignupForm = () => {
  const { control, formState, handleSubmit, reset } = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: 'test123',
      email: 'test123@gmail.com',
      password: 'qwertyuiop',
      confirmPassword: 'qwertyuiop'
    },
  });


  async function onSubmit(formData: SignUpFormSchemaType) {
    const { username, email, password, confirmPassword } = formData;

    const toastPromise = registerUser({
      body: {
        username, email, password, confirmPassword
      }
    });

    toast.promise(
      toastPromise,
      {
        loading: "Loading...",
        success: (data) => data.message || 'User registered successfully!',
        error: (data) => data.message || 'Unable to register',
      }
    );

    toastPromise.then(() => {
      reset();
    });
  }

  return (
    <form className={cn("flex flex-col gap-6")} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Username</FieldLabel>
              <Input {...field} id={field.name} placeholder="shaktimaan" required />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="m@example.com" required />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input {...field} id={field.name} aria-invalid={fieldState.invalid} type="password" required />
              <FieldDescription>
                Must be at between 8 - 12 characters long.
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
              <Input {...field} id={field.name} aria-invalid={fieldState.invalid} type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field />
        <Field>
          <Button type="submit" label="Create Account" disabled={formState.isLoading}>Create Account</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/signin">SignIn</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
