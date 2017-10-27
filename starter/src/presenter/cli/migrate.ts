import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import logger from '../../logger';
import repo from '../../repo/factory';

repo.migrate().then(() => {
  logger.info('Completed migration');
  process.exit();
}).catch((err: any) => {
  logger.error(err);
  process.exit();
});
