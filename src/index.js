const bankCollection = require('./bank-collection.json');
const bankCodes = bankCollection.map((b) => b.code);

const NOT_STRING_ERROR = new Error('Type Error: expected string');
const INVALID_IBAN_ERROR = new Error('Format Error: invalid Costa Rica IBAN format');

const errorIfNotString = (varToverify) => {
  if (typeof varToverify !== 'string') {
    throw NOT_STRING_ERROR;
  }
}

export const getCountryPrefixFromIBAN = (iban) => {
  errorIfNotString(iban);

  return iban.slice(0, 2);
};

export const verifyIBANCountryPrefix = (iban) => {
  errorIfNotString(iban);

  return getCountryPrefixFromIBAN(iban) === 'CR';
};

export const verifyIBANLength = (iban) => {
  errorIfNotString(iban);

  return iban.length === 22;
};

export const verifyIBANFormat = (iban) => {
  errorIfNotString(iban);

  return (/^CR\d\d0(1|[3-8])\d{16}$/).test(iban);
};

const errorOnInvalidIBAN = (iban) => {
  if (!verifyIBANFormat(iban)) {
    throw INVALID_IBAN_ERROR;
  }
}

export const getBankCodeFromIBAN = (iban) => {
  errorOnInvalidIBAN(iban);

  return iban.slice(5,8);
};

export const getBankObjectFromIBAN = (iban) => {
  const bankCode = getBankCodeFromIBAN(iban);
  const bankIndex = bankCodes.indexOf(bankCode);

  return bankCollection[bankIndex];
};

export const getBankNameFromIBAN = (iban, returnRepresentative = false) => {

};

class CostaRicaIBAN {
  iban = null;

  constructor(iban) {
    if (false) {
      throw new Error();
    }
  }
}

export default CostaRicaIBAN;
