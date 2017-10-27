import { Router } from 'express';
import commonPresenter from 'jscommons/dist/expressPresenter';
import Config from './Config';
import demo from './demo/handler';

export default (config: Config): Router => {
  const router = commonPresenter(config);
  router.get('/demo', demo(config));
  return router;
};
