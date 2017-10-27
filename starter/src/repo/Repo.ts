import CommonRepo from 'jscommons/dist/repoFactory/Repo';
import DemoSignature from './demo/Signature';

export default interface Repo extends CommonRepo {
  readonly demo: DemoSignature;
}
