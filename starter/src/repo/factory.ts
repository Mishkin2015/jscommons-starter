import config from '../config';
import logger from '../logger';
import facade from './facade';

export default facade({
  logger,
  memoryConfig: {
    logger,
    state: {
      demos: [],
    },
  },
  name: config.repo.facade,
});
