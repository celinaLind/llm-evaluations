"use client";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string({
    required_error: "Please add an experiment name.",
  }),
  model: z
    .string({
      required_error: "Please select a model to use.",
    })
    .min(4, {
      message: "Model name must be at least 2 characters.",
    }),
  prompt: z
    .string({
      required_error: "Please enter a prompt for your evaluation.",
    })
    .min(10, {
      message: "Your prompt must be at least 10 characters.",
    }),
  // .max(1000, {
  //     message: "Your prompt must be less than 1000 characters."
  // }) // will look into adding this later if necessary
});

export function NewExperiment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "default-model",
      prompt: "Best respond to the question being asked.",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="ma-auto w-3/4 space-y-6"
      >
        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Experiment Name</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} defaultValue={field.value} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Choose Model</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="model1">model1</SelectItem>
                    <SelectItem value="model2">model2</SelectItem>
                    <SelectItem value="model3">model3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Prompt</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." id="message" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">Start Experiment</Button>
        </div>
      </form>
    </Form>
  );
}
