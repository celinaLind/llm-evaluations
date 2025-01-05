export class TestCase {
  id: number = 0;
  name: string = `Test ${this.id}`;
  use: boolean = true;
  input: string = "What is 1 + 2?";
  expectedOutput: string = "3";
  resultOutput: string = "ooga booga";

  // this constructor using Partial allows for some parameters to be added and the rest to be set to the default values
  constructor(init?: Partial<TestCase>) {
    Object.assign(this, init);
  }
}
