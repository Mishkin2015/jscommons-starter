import CommonExpressConfig from 'jscommons/dist/expressPresenter/Config';
import Service from '../../service/Service';
import Translator from '../../translator/Translator';

export default interface Config extends CommonExpressConfig {
  readonly service: Service;
  readonly translator: Translator;
}
