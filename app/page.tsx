import { NewExperiment } from "@/components/new-experiment-form";
import { Button } from "@/components/ui/button";
import { DataTable } from "./experiments/test-case-columns";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-center font-42">New Experiment</h1>
      <div className="grid w-full p-2">
        <div className="col-span-6">
          <NewExperiment />
        </div>
        <div className="col-span-2">
          <Button>Run Expirment</Button>
          <Button>Delete</Button>
          {/* will need to create pop-up to confirm user delete */}
        </div>
        <div className="col-span-10">
          <DataTable />
        </div>
      </div>
      {/* This is going to include the model dropdown and the add prompt button */}
      {/* Once prompt added it will show prompt name and a button to edit the prompt */}
      {/* Add and edit prompt will pull up the prompt dialog feature/component */}
      {/* this will be the test case data table */}
      {/* between whether to add result data directly to this table or send user to another screen with resulting data */}
      {/* This is for the "Run Experiment" */}
    </div>
  );
}
