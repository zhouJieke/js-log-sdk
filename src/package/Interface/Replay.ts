import Http from "../Http/Http.ts";


export interface ReplayConfig {
  reportTime?: number
}


export abstract class Activate extends Http{
  abstract run(): void;
  abstract reportLogs(): void
}
