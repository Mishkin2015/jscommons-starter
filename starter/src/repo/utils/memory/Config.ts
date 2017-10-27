import { LoggerInstance } from 'winston';

interface State {
  demos: any[]; // tslint:disable-line:readonly-keyword
}

interface Config {
  state: State; // tslint:disable-line:readonly-keyword
  readonly logger: LoggerInstance;
}

export default Config;
