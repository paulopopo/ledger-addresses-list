import { validateAddress } from '../utils';
import '@babel/polyfill';

describe('Currencies validation Test', () => {
    it('should return true when given bitcoin address of 12 chars length', async () => {
        expect(await validateAddress({ currency: { family: 'bitcoin' }, address: 'aaaabbbbcccc' })).toEqual(true);
    });

    it('should return true when given bitcoin address of 2 chars length', async () => {
        expect(await validateAddress({ currency: { family: 'bitcoin' }, address: 'aa' })).toEqual(false);
    });
});
