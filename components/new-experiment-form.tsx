"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { useExperimentStore, useSelectors } from "@/app/store/experiment-store";
import { toast } from "@/hooks/use-toast";
import { modelsList } from "@/lib/utils/constants";
import { MultiSelect } from "./multi-select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string({
    required_error: "Please add an experiment name.",
  }),
  models: z.array(
    z.string({
      required_error: "Please select a model(s) to use.",
    })
  ),
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
  // const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const router = useRouter();
  const createExperiment = useExperimentStore(
    (state) => state.createExperiment
  );
  const experiments = useExperimentStore((state) => state.experiments);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      models: ["default-model"],
      prompt: "Best respond to the question being asked.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    // add new experiment
    const newId = await createExperiment(values);
    console.log(values);
    console.log("Experiments:", experiments);
    // go to experiment page
    // router.push(`/experiments`);
    router.push(`/experiments/${newId}`);
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
            name="models"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Choose Model</FormLabel>
                <MultiSelect
                  options={modelsList}
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  defaultValue={[]}
                  placeholder="Select model(s)"
                  variant="inverted"
                  maxCount={3}
                />
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
                <Textarea
                  onChange={field.onChange}
                  placeholder="Type your message here..."
                  id="message"
                  className="h-64" // Increase the height to 64 (16rem)
                />
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
