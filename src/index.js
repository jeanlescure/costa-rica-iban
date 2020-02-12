const NOT_STRING_ERROR = new Error('Type Error: expected string');

const errorIfNotString = (varToCheck) => {
  if (typeof varToCheck !== 'string') {
    throw NOT_STRING_ERROR;
  }
}

export const getCountryPrefixFromIBAN = (iban) => {
  errorIfNotString(iban);

  return iban.slice(0, 2);
};

export const checkIBANCountryPrefix = (iban) => {

};

export const checkIBANLength = (iban) => {

};

export const checkIBANFormat = (iban) => {

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
