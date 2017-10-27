import { LoggerInstance } from 'winston';
import MemoryConfig from './utils/memory/Config';

export default interface Config {
  readonly name: string;
  readonly memoryConfig: MemoryConfig;
  readonly logger: LoggerInstance;
}
