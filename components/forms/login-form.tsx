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
import { loginFormSchema, type LoginFormSchemaType } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginUser } from "@/lib/services";
import { useDispatch } from "react-redux";
import { saveAuthState } from "@/lib/store";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { control, formState, handleSubmit, reset } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: 'shaktimaan',
      password: 'Shaktimaan@123',
    },
  });


  const onSubmit = async (formData: LoginFormSchemaType) => {
    const { username, password } = formData;

    const toastPromise = loginUser({
      body: { username, password }
    });

    toast.promise(
      toastPromise,
      {
        loading: "Loading...",
        error: (data) => data.message || 'Unable to register',
      }
    );

    toastPromise.then(({ data }) => {
      const { accessToken, refreshToken, user } = data;
      dispatch(saveAuthState({ accessToken, refreshToken, user }));
      reset();
    });
  };

  return (
    <form className={cn("flex flex-col gap-6")} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
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
        <Field>
          <Button type="submit" disabled={formState.isLoading}>Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
};
