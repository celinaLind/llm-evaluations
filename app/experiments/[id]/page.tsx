"use client";
import { useExperimentStore } from "@/app/store/experiment-store";
import { MultiSelect } from "@/components/multi-select";
import { TypographyH1 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { experiments, modelsList } from "@/lib/utils/constants";
import { Pencil } from "lucide-react";
import { useParams } from "next/navigation";
import { DataTable } from "../data-table";

export default function Experiments() {
  // const experiments = useExperimentStore((state) => state.experiments);

  const deleteExperiment = useExperimentStore(
    (state) => state.deleteExperiment
  );
  const updateExperiment = useExperimentStore(
    (state) => state.updateExperiment
  );
  const { id } = useParams();

  // const currentExperiment = experiments.find(
  //   (experiment) => experiment.id === parseInt(id as string)
  // );
  const currentExperiment = experiments[0];

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <TypographyH1 value={currentExperiment!.name} />
      <div className="grid w-full p-2 gap-2">
        <div className="col-span-7">
          <MultiSelect
            options={modelsList}
            onValueChange={(values) => {}} //will need to add something here
            defaultValue={currentExperiment?.models}
            placeholder="Select model(s)"
            variant="inverted"
            maxCount={3}
          />
          <Button size="icon" className="w-10 h-8" variant="ghost">
            <Pencil size="sm" />
          </Button>
          <Label className="font-bold" htmlFor="message">
            Your Prompt
          </Label>

          <Textarea disabled value={currentExperiment!.prompt} id="message" />
        </div>
        <div className="flex flex-col col-span-3 gap-3">
          <Button variant="default">Run Evaluation</Button>
          <div className="flex flex-row w-full gap-2">
            <Button variant="outline" className="w-1/2">
              Save
            </Button>
            <Button variant="destructive" className="w-1/2">
              Delete
            </Button>
          </div>
          {/* will need to create pop-up to confirm user delete */}
        </div>
        <div className="col-span-10">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
