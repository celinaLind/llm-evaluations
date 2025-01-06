export class Experiment {
  id: number = 0;
  name?: string;
  models: number[] = [];
  prompts: number[] = [];
  testCases: number[] = [];
  results: number[] = [];

  constructor(init?: Partial<Experiment>) {
    Object.assign(this, init);
    this.name = this.name || `Experiment ${this.id}`;
  }

  // this will be used to verify styling for data
  isAcceptable(amount: number) {
    if (amount < 0.4) {
      return "bad";
    } else if (amount < 0.6) {
      return "okay";
    } else {
      return "great";
    }
  }
}
