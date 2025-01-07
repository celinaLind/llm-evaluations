import { useTestCaseStore } from "@/app/store/test-case-store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TestCaseDialog({ id }: { id: number | undefined }) {
  // FUTURE: VERIFY THE BELOW VARIABLES ARE HANDLED FOR BEST PRACTISES
  const testCases = useTestCaseStore((state) => state.testcases);
  const createOrUpdateTestCase = id
    ? useTestCaseStore((state) => state.updateTestCase)
    : useTestCaseStore((state) => state.createTestCase);

  const currentTestCase = id
    ? testCases.find((testCase) => testCase.id === id)
    : undefined;

  // FUTURE: Finish Setting up Dialog Box
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{id ? "Modify" : "Add"} Test Case</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{id ? "Modify" : "Add"} Test Case</DialogTitle>
          <DialogDescription>
            {id ? "Modify changes to" : "Add"} your test case here. Click save
            when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-5 items-center gap-2">
            <Label htmlFor="testName" className="text-center">
              Name
            </Label>
            <Input id="testName" value="" className="col-span-4" />
          </div>
          <div className="grid grid-cols-5 items-center gap-2">
            <Label htmlFor="input" className="text-center">
              Input
            </Label>
            <Input id="input" value="" className="col-span-4" />
          </div>
          <div className="grid grid-cols-5 items-center gap-2">
            <Label htmlFor="expectedoutput" className="text-center">
              Expected Output
            </Label>
            <Input id="expectedoutput" value="" className="col-span-4" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Test Case</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
