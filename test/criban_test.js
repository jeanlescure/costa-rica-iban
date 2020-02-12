import CostaRicaIBAN, {
  getCountryPrefixFromIBAN,
  verifyIBANCountryPrefix,
  verifyIBANLength,
  verifyIBANFormat,
  getBankCodeFromIBAN,
  getBankObjectFromIBAN,
} from '../src';

const bankCollection = require('../src/bank-collection.json');

const goodIBAN = 'CR06010200009123456789';
const goodIBANBank = bankCollection.find((b) => b.code === '102');

const badIBAN = 'DE69 5021 0900 0123 4567 13';

describe('Costa Rica IBAN functions', () => {
  it('should be able to get the country prefix', () => {
    try {
      getCountryPrefixFromIBAN();
      expect(true).toBe(false);
    } catch(e) {
      expect(e.message).toBe('Type Error: expected string');
      expect(getCountryPrefixFromIBAN(goodIBAN)).toBe('CR');
    }
  });

  it('should be able to verify the country prefix', () => {
    try {
      verifyIBANCountryPrefix();
      expect(true).toBe(false);
    } catch(e) {
      expect(e.message).toBe('Type Error: expected string');
      expect(verifyIBANCountryPrefix(badIBAN)).toBe(false);
      expect(verifyIBANCountryPrefix(goodIBAN)).toBe(true);
    }
  });

  it('should be able to verify the length of the accounts', () => {
    try {
      verifyIBANLength();
      expect(true).toBe(false);
    } catch(e) {
      expect(e.message).toBe('Type Error: expected string');
      expect(verifyIBANLength(badIBAN)).toBe(false);
      expect(verifyIBANLength(goodIBAN)).toBe(true);
    }
  });

  it('should be able to verify the correct format of the accounts', () => {
    try {
      verifyIBANFormat();
      expect(true).toBe(false);
    } catch(e) {
      expect(e.message).toBe('Type Error: expected string');
      expect(verifyIBANFormat(badIBAN)).toBe(false);
      expect(verifyIBANFormat(goodIBAN)).toBe(true);
    }
  });

  it('should be able to get the bank code', () => {
    try {
      getBankCodeFromIBAN(badIBAN);
      expect(true).toBe(false);
    } catch(e) {
      expect(e.message).toBe('Format Error: invalid Costa Rica IBAN format');
      expect(getBankCodeFromIBAN(goodIBAN)).toBe('102');
    }
  });

  it('should be able to get the bank object', () => {
    try {
      getBankObjectFromIBAN(badIBAN);
      expect(true).toBe(false);
    } catch(e) {
      expect(e.message).toBe('Format Error: invalid Costa Rica IBAN format');
      expect(getBankObjectFromIBAN(goodIBAN).entity).toBe('BAC San José S.A.');
    }
  });
});
