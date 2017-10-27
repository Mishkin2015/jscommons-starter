import Config from '../Config';
import Signature from './Signature';

export default (config: Config): Signature => {
  return async () => {
    await config.repo.demo({});
  };
};
