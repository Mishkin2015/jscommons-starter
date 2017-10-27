import commonService from 'jscommons/dist/service';
import Config from './Config';
import demo from './demo/index';
import Service from './Service';

export default (config: Config): Service => {
  return {
    ...commonService(config),
    demo: demo(config),
  };
};
