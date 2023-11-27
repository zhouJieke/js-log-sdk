

export interface ReplayConfig {
  reportTime?: number
}


export abstract class Activate {
  abstract run(): void;
  abstract reportLogs(): void
}
