var CostaRicaIBAN = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    INVALID_IBAN_ERROR: () => INVALID_IBAN_ERROR,
    NOT_STRING_ERROR: () => NOT_STRING_ERROR,
    default: () => src_default,
    getBankCategoryFromIBAN: () => getBankCategoryFromIBAN,
    getBankCodeFromIBAN: () => getBankCodeFromIBAN,
    getBankNameFromIBAN: () => getBankNameFromIBAN,
    getBankObjectFromIBAN: () => getBankObjectFromIBAN,
    getCountryPrefixFromIBAN: () => getCountryPrefixFromIBAN,
    verifyIBANCountryPrefix: () => verifyIBANCountryPrefix,
    verifyIBANFormat: () => verifyIBANFormat,
    verifyIBANLength: () => verifyIBANLength
  });

  // package.json
  var version = "2.0.0";

  // src/bank-collection.json
  var bank_collection_default = [
    {
      code: "100",
      entity: "Banco Central de Costa Rica",
      category: "",
      participation: "asociada",
      representative: ""
    },
    {
      code: "102",
      entity: "BAC San Jos\xE9 S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "104",
      entity: "Banco Davivienda (Costa Rica) S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "107",
      entity: "Banco BCT S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "114",
      entity: "Banco LAFISE S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "116",
      entity: "Banca Prom\xE9rica S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "117",
      entity: "Banco Citibank (Costa Rica) S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "120",
      entity: "Banco Improsa S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "123",
      entity: "Scotiabank de Costa Rica S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "125",
      entity: "Banco Cathay de Costa Rica S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "126",
      entity: "Banco General (Costa Rica) S.A.",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "312",
      entity: "Banco de Soluciones de Costa Rica S.A. (BANSOLS.A.)",
      category: "BANCO COMERCIAL PRIVADO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "151",
      entity: "Banco Nacional de Costa Rica",
      category: "BANCO COMERCIAL PUBLICO, BPDC, OTRA ENTIDAD CREADA POR LEY ESPECIAL",
      participation: "asociada",
      representative: ""
    },
    {
      code: "152",
      entity: "Banco de Costa Rica",
      category: "BANCO COMERCIAL PUBLICO, BPDC, OTRA ENTIDAD CREADA POR LEY ESPECIAL",
      participation: "asociada",
      representative: ""
    },
    {
      code: "153",
      entity: "Banco Cr\xE9dito Agr\xEDcola de Cartago",
      category: "BANCO COMERCIAL PUBLICO, BPDC, OTRA ENTIDAD CREADA POR LEY ESPECIAL",
      participation: "asociada",
      representative: ""
    },
    {
      code: "161",
      entity: "Banco Popular y de Desarrollo Comunal",
      category: "BANCO COMERCIAL PUBLICO, BPDC, OTRA ENTIDAD CREADA POR LEY ESPECIAL",
      participation: "asociada",
      representative: ""
    },
    {
      code: "162",
      entity: "Banco Hipotecario de la Vivienda",
      category: "BANCO COMERCIAL PUBLICO, BPDC, OTRA ENTIDAD CREADA POR LEY ESPECIAL",
      participation: "asociada",
      representative: ""
    },
    {
      code: "304",
      entity: "Financiera Cafsa S.A.",
      category: "EMPRESA FINANCIERA NO BANCARIA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "310",
      entity: "Financiera G&T Continental Costa Rica S.A.",
      category: "EMPRESA FINANCIERA NO BANCARIA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "321",
      entity: "Financiera Multivalores S.A.",
      category: "EMPRESA FINANCIERA NO BANCARIA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "322",
      entity: "Financiera Comeca S.A.",
      category: "EMPRESA FINANCIERA NO BANCARIA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "326",
      entity: "Financiera Desyfin S.A.",
      category: "EMPRESA FINANCIERA NO BANCARIA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "406",
      entity: "Latin American Exchange Casa de Cambio S.A (Latinex)",
      category: "CASA DE CAMBIO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "450",
      entity: "Citi Tarjetas de Costa Rica S.A.",
      category: "ENTIDAD LIQUIDADORA DE SERVICIOS Y EMISORA DE TARJETAS",
      participation: "asociada",
      representative: ""
    },
    {
      code: "451",
      entity: "Evertec Costa Rica S.A.",
      category: "ENTIDAD LIQUIDADORA DE SERVICIOS Y EMISORA DE TARJETAS",
      participation: "asociada",
      representative: ""
    },
    {
      code: "501",
      entity: "Bolsa Nacional de Valores S.A.",
      category: "ENTIDAD LIQUIDADORA DE SERVICIOS Y EMISORA DE TARJETAS",
      participation: "asociada",
      representative: ""
    },
    {
      code: "745",
      entity: "Central de Valores Bolsa Nacional de Valores (CEVAL)",
      category: "ENTIDAD LIQUIDADORA DE SERVICIOS Y EMISORA DE TARJETAS",
      participation: "asociada",
      representative: ""
    },
    {
      code: "837",
      entity: "Credomatic",
      category: "ENTIDAD LIQUIDADORA DE SERVICIOS Y EMISORA DE TARJETAS",
      participation: "representada",
      representative: "BAC San Jos\xE9"
    },
    {
      code: "553",
      entity: "Inversiones Sama S.A.",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "554",
      entity: "Mercado de Valores de C.R.",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "556",
      entity: "BCT Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "558",
      entity: "Citi Valores Accival S.A.",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "559",
      entity: "ACOBO",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "568",
      entity: "INS Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "569",
      entity: "Lafise Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "570",
      entity: "Davivienda Puesto de Bolsa (Costa Rica) S.A.",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "571",
      entity: "Scotia Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "574",
      entity: "Mutual Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "577",
      entity: "Aldesa Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "581",
      entity: "BAC San Jos\xE9",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "586",
      entity: "BN Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "587",
      entity: "Popular Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "588",
      entity: "BCR Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "594",
      entity: "Improsa Valores",
      category: "PUESTO DE BOLSA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "651",
      entity: "BN-VITAL Operadora de Planes de Pensiones Complementarias S.A.",
      category: "FONDO DE PENSION",
      participation: "asociada",
      representative: ""
    },
    {
      code: "653",
      entity: "Vida Plena Operadora de Pensiones Complementarias S.A.",
      category: "FONDO DE PENSION",
      participation: "asociada",
      representative: ""
    },
    {
      code: "654",
      entity: "Caja Costarricense de Seguro Social Operadora de Pensiones Complementarias",
      category: "FONDO DE PENSION",
      participation: "asociada",
      representative: ""
    },
    {
      code: "655",
      entity: "Bac San Jos\xE9 Operadora de Pensiones Complementarias",
      category: "FONDO DE PENSION",
      participation: "asociada",
      representative: ""
    },
    {
      code: "656",
      entity: "Operadora de Planes de Pensiones Complementarias del Banco Popular y Desarrollo Comunal",
      category: "FONDO DE PENSION",
      participation: "asociada",
      representative: ""
    },
    {
      code: "657",
      entity: "BCR Operadora Planes de Pensiones Complementarias S.A.",
      category: "FONDO DE PENSION",
      participation: "asociada",
      representative: ""
    },
    {
      code: "725",
      entity: "MIDEPLAN",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "730",
      entity: "Instituto de Fomento y Asesor\xEDa Municipal (IFAM)",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "731",
      entity: "Instituto Costarricense sobre Drogas (ICD)",
      category: "INSTITUCION PUBLICA",
      participation: "",
      representative: ""
    },
    {
      code: "734",
      entity: "Instituto Costarricense de Electricidad (ICE)",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "735",
      entity: "Recope",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "739",
      entity: "Ministerio de Hacienda",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "746",
      entity: "Caja Costarricense de Seguro Social (CCSS)",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "747",
      entity: "Instituto Nacional de Seguros (INS)",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "750",
      entity: "Gob. Tribunal Supremo de Elecciones (TSE)",
      category: "INSTITUCION PUBLICA",
      participation: "",
      representative: ""
    },
    {
      code: "754",
      entity: "Junta de Protecci\xF3n Social de San Jos\xE9",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "755",
      entity: "Municipalidad de San Jos\xE9",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "756",
      entity: "Radiogr\xE1fica Costarricense S.A. (RACSA)",
      category: "INSTITUCION PUBLICA",
      participation: "asociada",
      representative: ""
    },
    {
      code: "757",
      entity: "Municipalidad de Cartago",
      category: "INSTITUCION PUBLICA",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "838",
      entity: "Promotora del Comercio Exterior de Costa Rica (Procomer)",
      category: "INSTITUCION PUBLICA",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "803",
      entity: "Grupo Mutual Alajuela la Vivienda",
      category: "MUTUAL DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "804",
      entity: "Mutual Cartago de Ahorro y Pr\xE9stamo",
      category: "MUTUAL DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "180",
      entity: "COOPEACOSTA",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "811",
      entity: "Cooperativa de Ahorro y Cr\xE9dito de la Comunidad de Ciudad Quesada R. L. (COOCIQUE)",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "812",
      entity: "COOPE SAN MARCOS",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "813",
      entity: "Cooperativa de Ahorro y Cr\xE9dito Alianza de P\xE9rez Zeled\xF3n (COOPEALIANZA)",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "814",
      entity: "Cooperativa Nacional de Educadores. R.L. (COOPENAE)",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "815",
      entity: "SERVICOOP R.L.",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "816",
      entity: "Cooperativa de Ahorro y Cr\xE9dito de Servidores P\xFAblicos R.L. (COOPESERVIDORES)",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "817",
      entity: "Cooperativa de Ahorro y Cr\xE9dito ANDE N\xBA 1 R.L. (COOPEANDE).",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "820",
      entity: "Coop. COOPECAJA",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "821",
      entity: "Caja de Ahorro y Pr\xE9stamos de ANDE",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "822",
      entity: "COOPEMEP R.L.",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "asociada",
      representative: ""
    },
    {
      code: "824",
      entity: "CREDECOOP",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "825",
      entity: "COOPESAN RAMON",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "827",
      entity: "COOPEBANPO",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "829",
      entity: "COOPEAMISTAD",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "831",
      entity: "COOPEGRECIA",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "832",
      entity: "COOPAVEGRA",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "833",
      entity: "COOPEUNA",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "834",
      entity: "COOPEANDE No. 7 R.L.",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "835",
      entity: "COOPESPARTA R.L.",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    },
    {
      code: "836",
      entity: "COOPEASERRI R.L.",
      category: "COOPERATIVA DE AHORRO Y PRESTAMO",
      participation: "representada",
      representative: "COOPENAE"
    }
  ];

  // src/index.ts
  var bankCodes = bank_collection_default.map((b) => b.code);
  var NOT_STRING_ERROR = new Error("Type Error: expected string");
  var INVALID_IBAN_ERROR = new Error("Format Error: invalid Costa Rica IBAN format");
  var errorIfNotString = (varToverify) => {
    if (typeof varToverify !== "string") {
      throw NOT_STRING_ERROR;
    }
  };
  var getCountryPrefixFromIBAN = (iban) => {
    errorIfNotString(iban);
    return iban.slice(0, 2);
  };
  var verifyIBANCountryPrefix = (iban) => {
    errorIfNotString(iban);
    return getCountryPrefixFromIBAN(iban) === "CR";
  };
  var verifyIBANLength = (iban) => {
    errorIfNotString(iban);
    return iban.length === 22;
  };
  var verifyIBANFormat = (iban) => {
    errorIfNotString(iban);
    return /^CR\d\d0(1|[3-8])\d{16}$/.test(iban) && bankCodes.indexOf(iban.slice(5, 8)) > -1;
  };
  var errorOnInvalidIBAN = (iban) => {
    if (!verifyIBANFormat(iban)) {
      throw INVALID_IBAN_ERROR;
    }
  };
  var getBankCodeFromIBAN = (iban) => {
    errorOnInvalidIBAN(iban);
    return iban.slice(5, 8);
  };
  var getBankObjectFromIBAN = (iban) => {
    const bankCode = getBankCodeFromIBAN(iban);
    const bankIndex = bankCodes.indexOf(bankCode);
    return bank_collection_default[bankIndex];
  };
  var getBankNameFromIBAN = (iban, returnRepresentative = false) => {
    const bankObject = getBankObjectFromIBAN(iban);
    return returnRepresentative && bankObject.participation === "representada" ? bankObject.representative : bankObject.entity;
  };
  var getBankCategoryFromIBAN = (iban, returnRepresentative = false) => {
    const bankObject = getBankObjectFromIBAN(iban);
    return bankObject.category;
  };
  var CostaRicaIBAN = class {
    constructor(iban) {
      this.getVersion = () => version;
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
  };
  var src_default = CostaRicaIBAN;
  return src_exports;
})();
//# sourceMappingURL=costa-rica-iban.js.map
'undefined'!=typeof module&&(module.exports=CostaRicaIBAN.default),'undefined'!=typeof window&&(CostaRicaIBAN=CostaRicaIBAN.default);