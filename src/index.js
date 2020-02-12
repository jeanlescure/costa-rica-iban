const NOT_STRING_ERROR = new Error('Type Error: expected string');

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

export const getBankCodeFromIBAN = (iban) => {

};

export const getBankNameFromBankCode = (bankCode) => {

};

export const getBankNameFromIBAN = (iban) => {

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
