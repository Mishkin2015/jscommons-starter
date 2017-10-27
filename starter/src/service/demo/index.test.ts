import setupTests from '../utils/setupTests';

describe(__filename, () => {
  const service = setupTests();

  it('should await demo when using demo', async () => {
    await service.demo({});
  });
});
