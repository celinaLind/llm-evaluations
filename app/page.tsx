import { NewExperiment } from "@/components/new-experiment-form";
import { TypographyH1 } from "@/components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 space-y-8">
      <TypographyH1 value="New Experiment" />
      <NewExperiment />
    </div>
  );
}
