export class Prompt {
  id: number = 0;
  name: string = `Prompt ${this.id}`;
  prompt: string =
    "You are tasked with answering the users question to the best of your ability.";

  constructor(init?: Partial<Prompt>) {
    Object.assign(this, init);
  }
}
