import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import logger from '../../logger';
import repo from '../../repo/factory';

repo.rollback().then(() => {
  logger.info('Completed rollback');
  process.exit();
}).catch((err: any) => {
  logger.error(err);
  process.exit();
});
