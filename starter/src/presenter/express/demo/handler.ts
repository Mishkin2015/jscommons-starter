import { OK } from 'http-status-codes';
import catchErrors from 'jscommons/dist/expressPresenter/utils/catchErrors';
import Config from '../Config';

export default (config: Config) => {
  return catchErrors(config, async (_req, res) => {
    await config.service.demo({});
    res.status(OK).send(config.translator.demo());
  });
};
