import * as express from 'express';
import handleListen from 'jscommons/dist/expressPresenter/utils/handleListen';
import config from '../../config';
import logger from '../../logger';
import service from '../../service/factory';
import translator from '../../translator/factory';
import presenterFacade from './facade';

const app = express();
const presenter = presenterFacade({
  bodyParserLimit: config.presenter.express.bodyParserLimit,
  customRoute: config.presenter.express.customRoute,
  customRouteText: config.presenter.express.customRouteText,
  logger,
  morganDirectory: config.presenter.express.morganDirectory,
  service,
  translator,
});

app.use(presenter);
app.listen(config.presenter.express.port, () => {
  logger.info(`Listening on port ${config.presenter.express.port}`);
  handleListen(logger);
});

export default app;
