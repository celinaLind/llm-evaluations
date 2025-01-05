export class Result {
  id: number = 0;
  modelId: number = 0;
  testCaseId: number = 0;
  output: string = "3";
  runtime: number = new Date().getMilliseconds();
  acceptability: number = 0.3;
}
