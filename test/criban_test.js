import CostaRicaIBAN, {
  getCountryPrefixFromIBAN,
} from '../src';

const goodIBAN = 'CR06010200009123456789';

describe('Costa Rica IBAN class', () => {
  it('should be able to get the country prefix', () => {
    expect(getCountryPrefixFromIBAN(goodIBAN)).toBe('CR');
  });
});
