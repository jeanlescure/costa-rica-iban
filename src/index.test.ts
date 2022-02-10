import CostaRicaIBAN, {
  getCountryPrefixFromIBAN,
  verifyIBANCountryPrefix,
  verifyIBANLength,
  verifyIBANFormat,
  getBankCodeFromIBAN,
  getBankObjectFromIBAN,
  getBankNameFromIBAN,
  NOT_STRING_ERROR,
  INVALID_IBAN_ERROR,
  BankObject,
} from '.';

import bankCollection from './bank-collection.json';

const goodIBAN = 'CR06010200009123456789';
const goodIBANBank = bankCollection.find((b) => b.code === '102') as BankObject;

const badIBAN = 'DE69 5021 0900 0123 4567 13';

const deceptiveIBAN = 'CR06030500009123456789';

const ambiguousIBAN = 'CR06082400009123456789';
const ambiguousIBANBank = bankCollection.find((b) => b.code === '824') as BankObject;

describe('Costa Rica IBAN functions', () => {
  it('should be able to get the country prefix', () => {
    expect(
      // @ts-ignore
      getCountryPrefixFromIBAN
    ).toThrow(NOT_STRING_ERROR);

    expect(getCountryPrefixFromIBAN(goodIBAN)).toBe('CR');
  });

  it('should be able to verify the country prefix', () => {
    expect(
      // @ts-ignore
      verifyIBANCountryPrefix
    ).toThrow(NOT_STRING_ERROR);

    expect(verifyIBANCountryPrefix(badIBAN)).toBe(false);
    expect(verifyIBANCountryPrefix(goodIBAN)).toBe(true);
  });

  it('should be able to verify the length of the accounts', () => {
    expect(
      // @ts-ignore
      verifyIBANLength
    ).toThrow(NOT_STRING_ERROR);

    expect(verifyIBANLength(badIBAN)).toBe(false);
    expect(verifyIBANLength(goodIBAN)).toBe(true);
  });

  it('should be able to verify the correct format of the accounts', () => {
    expect(
      // @ts-ignore
      verifyIBANFormat
    ).toThrow(NOT_STRING_ERROR);

    expect(verifyIBANFormat(badIBAN)).toBe(false);
    expect(verifyIBANFormat(deceptiveIBAN)).toBe(false);
    expect(verifyIBANFormat(goodIBAN)).toBe(true);
  });

  it('should be able to get the bank code', () => {
    expect(
      // @ts-ignore
      () => getBankCodeFromIBAN(badIBAN)
    ).toThrow(INVALID_IBAN_ERROR);

    expect(getBankCodeFromIBAN(goodIBAN)).toBe(goodIBANBank.code);
  });

  it('should be able to get the bank object', () => {
    expect(
      // @ts-ignore
      () => getBankObjectFromIBAN(badIBAN)
    ).toThrow(INVALID_IBAN_ERROR);

    expect(getBankObjectFromIBAN(goodIBAN).entity).toBe(goodIBANBank.entity);
  });

  it('should be able to get the bank name', () => {
    expect(
      // @ts-ignore
      () => getBankNameFromIBAN(badIBAN)
    ).toThrow(INVALID_IBAN_ERROR);

    expect(getBankNameFromIBAN(goodIBAN)).toBe(goodIBANBank.entity);
    expect(getBankNameFromIBAN(ambiguousIBAN)).toBe(ambiguousIBANBank.entity);
    expect(getBankNameFromIBAN(ambiguousIBAN, true)).toBe(ambiguousIBANBank.representative);
  });
});

describe('Costa Rica IBAN class', () => {
  it('should be able to initialize with a valid Costa Rica IBAN', () => {
    expect(
      () => new CostaRicaIBAN(badIBAN)
    ).toThrow(INVALID_IBAN_ERROR);

    expect(
      // @ts-ignore
      () => new CostaRicaIBAN()
    ).toThrow(NOT_STRING_ERROR);

    const cri = new CostaRicaIBAN(goodIBAN);
    expect(cri.iban).toBe(goodIBAN);
  });

  it('should be able to get the country prefix', () => {
    const cri = new CostaRicaIBAN(goodIBAN);

    expect(cri.getCountryPrefix()).toBe('CR');
  });

  it('should be able to get the bank code', () => {
    const cri = new CostaRicaIBAN(goodIBAN);

    expect(cri.getBankCode()).toBe(goodIBANBank.code);
  });

  it('should be able to get the bank object', () => {
    const cri = new CostaRicaIBAN(goodIBAN);

    expect(cri.getBankObject().entity).toBe(goodIBANBank.entity);
  });

  it('should be able to get the bank name', () => {
    const cri = new CostaRicaIBAN(goodIBAN);

    expect(cri.getBankName()).toBe(goodIBANBank.entity);
  });

  it('should be able to get the bank name', () => {
    const cri = new CostaRicaIBAN(goodIBAN);

    expect(cri.getBankCategory()).toBe(goodIBANBank.category);
  });
});
