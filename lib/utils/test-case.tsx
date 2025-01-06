export class TestCase {
  id?: number;
  experimentId: number[] = [1];
  testName: string = `Test ${this.id}`;
  input: string = "What is 1 + 2?";
  expectedOutput: string = "3";

  // this constructor using Partial allows for some parameters to be added and the rest to be set to the default values
  constructor(init: Partial<Omit<TestCase, "id">>) {
    Object.assign(this, init);
  }
}
