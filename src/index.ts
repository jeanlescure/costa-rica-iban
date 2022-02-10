// @ts-ignore
import { version } from '../package.json';
import bankCollection from './bank-collection.json';

const bankCodes: string[] = bankCollection.map((b) => b.code);

export interface BankObject {
  code: string;
  entity: string;
  category: string;
  participation: string;
  representative: string;
};

export const NOT_STRING_ERROR = new Error('Type Error: expected string');
export const INVALID_IBAN_ERROR = new Error('Format Error: invalid Costa Rica IBAN format');

// Since the browser version of the library cannot make use of types,
// we added this helper to make sure the input is a string.
const errorIfNotString = (varToverify: any) => {
  if (typeof varToverify !== 'string') {
    throw NOT_STRING_ERROR;
  }
};

export const getCountryPrefixFromIBAN = (iban: string) => {
  errorIfNotString(iban);

  return iban.slice(0, 2);
};

export const verifyIBANCountryPrefix = (iban: string) => {
  errorIfNotString(iban);

  return getCountryPrefixFromIBAN(iban) === 'CR';
};

export const verifyIBANLength = (iban: string) => {
  errorIfNotString(iban);

  return iban.length === 22;
};

export const verifyIBANFormat = (iban: string) => {
  errorIfNotString(iban);

  return (/^CR\d\d0(1|[3-8])\d{16}$/).test(iban)
    && bankCodes.indexOf(iban.slice(5, 8)) > -1;
};

const errorOnInvalidIBAN = (iban: string) => {
  if (!verifyIBANFormat(iban)) {
    throw INVALID_IBAN_ERROR;
  }
};

export const getBankCodeFromIBAN = (iban: string) => {
  errorOnInvalidIBAN(iban);

  return iban.slice(5, 8);
};

export const getBankObjectFromIBAN = (iban: string) => {
  const bankCode = getBankCodeFromIBAN(iban);
  const bankIndex = bankCodes.indexOf(bankCode);

  return bankCollection[bankIndex] as BankObject;
};

export const getBankNameFromIBAN = (iban: string, returnRepresentative = false) => {
  const bankObject = getBankObjectFromIBAN(iban);

  return (returnRepresentative && bankObject.participation === 'representada') ? (
    bankObject.representative
  ) : (
    bankObject.entity
  );
};

export const getBankCategoryFromIBAN = (iban: string, returnRepresentative = false) => {
  const bankObject = getBankObjectFromIBAN(iban);

  return bankObject.category;
};

class CostaRicaIBAN {
  iban: string;

  constructor(iban: string) {
    errorOnInvalidIBAN(iban);

    this.iban = iban;
  }

  getCountryPrefix() {
    return getCountryPrefixFromIBAN(this.iban);
  }

  getBankCode() {
    return getBankCodeFromIBAN(this.iban);
  }

  getBankObject() {
    return getBankObjectFromIBAN(this.iban);
  }

  getBankName() {
    return getBankNameFromIBAN(this.iban);
  }

  getBankCategory() {
    return getBankCategoryFromIBAN(this.iban);
  }

  getVersion = () => version;
}

export default CostaRicaIBAN;
