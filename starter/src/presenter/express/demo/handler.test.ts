import { OK } from 'http-status-codes';
import setupTests from '../utils/setupTests';

describe(__filename, () => {
  const { supertest } = setupTests();

  it('should return a 200 when using the demo handler', async () => {
    await supertest.get('/demo').expect(OK);
  });
});
