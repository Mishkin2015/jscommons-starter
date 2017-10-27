import commonMemoryRepo from 'jscommons/dist/memoryRepo';
import demo from '../../demo/memory';
import Repo from '../../Repo';
import Config from './Config';

export default (config: Config): Repo => {
  return {
    ...commonMemoryRepo(config),
    demo: demo(config),
  };
};
