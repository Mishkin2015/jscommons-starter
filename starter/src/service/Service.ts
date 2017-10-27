import CommonService from 'jscommons/dist/serviceFactory/Service';
import DemoSignature from './demo/Signature';

export default interface Service extends CommonService {
  readonly demo: DemoSignature;
}
