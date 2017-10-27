import logger from '../logger';
import repo from '../repo/factory';
import facade from './facade';

export default facade({
  logger,
  repo,
});
