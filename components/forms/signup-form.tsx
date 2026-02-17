'use client';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { signUpFormSchema, type SignUpFormSchemaType } from "@/lib/validators"
import { zodResolver } from "@hookform/resolvers/zod"

export function SignupForm({
  className,
}: React.ComponentProps<"form">) {
  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });


  function onSubmit(data: SignUpFormSchemaType) {
    console.log({ data });

    // toast("You submitted the following values:", {
    //   description: (
    //     <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
    //       <code>{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: "bottom-right",
    //   classNames: {
    //     content: "flex flex-col gap-2",
    //   },
    //   style: {
    //     "--border-radius": "calc(var(--radius)  + 4px)",
    //   } as React.CSSProperties,
    // })
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Username</FieldLabel>
              <Input {...field} id={field.name} placeholder="@shaktimaan" required />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )} />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="m@example.com" required />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )} />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input {...field} id={field.name} aria-invalid={fieldState.invalid} type="password" required />
              <FieldDescription>
                Must be at between 8 - 12 characters long.
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )} />
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
              <Input {...field} id={field.name} aria-invalid={fieldState.invalid} type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )} />
        <Field />
        <Field>
          <Button type="submit">Create Account</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/signin">SignIn</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
