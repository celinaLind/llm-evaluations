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

const experiments = [
  new Experiment({ id: 1 }),
  new Experiment({ id: 2 }),
  new Experiment({ id: 3 }),
  new Experiment({ id: 4 }),
  new Experiment({ id: 5 }),
];

const prompts = [new Prompt({ id: 1 })];

const models = ["model1", "model2", "model3"];

export { models, prompts, testcases, experiments };
