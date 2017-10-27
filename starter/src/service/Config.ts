import CommonConfig from 'jscommons/dist/service/Config';
import { LoggerInstance } from 'winston';
import Repo from '../repo/Repo';

interface Config extends CommonConfig {
  readonly repo: Repo;
  readonly logger: LoggerInstance;
}

export default Config;
