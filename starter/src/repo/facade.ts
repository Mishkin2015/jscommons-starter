import Config from './Config';
import Repo from './Repo';
import memoryRepo from './utils/memory/facade';

export default (config: Config): Repo => {
  /* istanbul ignore next */
  switch (config.name) {
    default: case 'memory':
      return memoryRepo(config.memoryConfig);
  }
};
