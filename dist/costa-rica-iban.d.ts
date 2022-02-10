export interface BankObject {
    code: string;
    entity: string;
    category: string;
    participation: string;
    representative: string;
}
export declare const NOT_STRING_ERROR: Error;
export declare const INVALID_IBAN_ERROR: Error;
export declare const getCountryPrefixFromIBAN: (iban: string) => string;
export declare const verifyIBANCountryPrefix: (iban: string) => boolean;
export declare const verifyIBANLength: (iban: string) => boolean;
export declare const verifyIBANFormat: (iban: string) => boolean;
export declare const getBankCodeFromIBAN: (iban: string) => string;
export declare const getBankObjectFromIBAN: (iban: string) => BankObject;
export declare const getBankNameFromIBAN: (iban: string, returnRepresentative?: boolean) => string;
export declare const getBankCategoryFromIBAN: (iban: string, returnRepresentative?: boolean) => string;
declare class CostaRicaIBAN {
    iban: string;
    constructor(iban: string);
    getCountryPrefix(): string;
    getBankCode(): string;
    getBankObject(): BankObject;
    getBankName(): string;
    getBankCategory(): string;
    getVersion: () => string;
}
export default CostaRicaIBAN;
