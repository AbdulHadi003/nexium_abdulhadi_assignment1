// src/components/InputForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// Remove this line to avoid circular import and missing export errors
const FormSchema = z.object({
  genre: z.string().min(2, {
    message: "Genre must be at least 2 characters.",
  }),
});

// Define and export the Input component here if not already present
import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => (
    <input
      ref={ref}
      className="border rounded px-3 py-2 w-full"
      {...props}
    />
  )
);
Input.displayName = "Input";

export function InputForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      genre: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const genre = data.genre.trim().toLowerCase();
    router.push(`/quote?genre=${genre}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormDescription>
                Enter a genre to view related quotes.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">See Quotes</Button>
      </form>
    </Form>
  );
}