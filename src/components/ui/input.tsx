"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


// Define the schema for the form using Zod
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-110 space-y-8 bg-amber-200 p-6 rounded-md shadow-md">
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="space-x-5 space-y-10 font-extrabold italic text-foreground text-1xl">Enter a genre to view related quotes.</FormLabel>
              <FormControl>
                <Input className="mt-5 font-extrabold italic text-foreground text-1xl" placeholder="e.g., motivational, love" {...field} />
              </FormControl>
              <FormLabel className="space-x-5 space-y-10 font-medium italic text-foreground text-0.1 mt-2">i.e. wisdom, success, humor, life, creativity, leadership ... etc</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">See Quotes</Button>
      </form>
    </Form>
    
  );
}