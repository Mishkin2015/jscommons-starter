import * as sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import setupService from 'jscommons/dist/tests/utils/setupService';
import 'mocha'; // tslint:disable-line:no-import-side-effect
import service from '../factory';

const setup = setupService(service);

export default () => {
  setup();
  return service;
};
