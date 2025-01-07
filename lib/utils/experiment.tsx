export class Experiment {
  id: number = 0;
  name: string;
  models: string[] = [];
  prompt: string = "This is a prompt";
  testCases: number[] = [];
  results: number[] = [];

  private static nextId = 1;

  constructor(init?: Partial<Experiment>) {
    this.id = Experiment.nextId++;
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
