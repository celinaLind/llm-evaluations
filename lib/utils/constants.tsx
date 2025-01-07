import { TestCase } from "./test-case";
import { Experiment } from "./experiment";
import { Prompt } from "./prompt";

const testcases = [
  new TestCase({ testName: "Test 1" }),
  new TestCase({ testName: "Test 2" }),
  new TestCase({ testName: "Test 3" }),
  new TestCase({ testName: "Test 4" }),
  new TestCase({ testName: "Test 5" }),
];

var experiments = [
  new Experiment({ id: 1 }),
  new Experiment({ id: 2 }),
  new Experiment({ id: 3 }),
  new Experiment({ id: 4 }),
  new Experiment({ id: 5 }),
];

const prompts = [new Prompt({ id: 1 })];

const modelsList = [
  { value: "model1", label: "Model 1" },
  { value: "model2", label: "Model 2" },
  { value: "model3", label: "Model 3" },
];

export { modelsList, prompts, testcases, experiments };
