export class Experiment {
  id: number = 0;
  name: string = `Experiment ${this.id}`;
  models: number[] = [];
  prompts: number[] = [];
  testCases: number[] = [];
  results: number[] = [];

  constructor(init?: Partial<Experiment>) {
    Object.assign(this, init);
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
