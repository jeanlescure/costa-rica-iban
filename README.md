<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg" alt="imagen de la bandera de costa rica" width="200" height="200">

# Costa Rica IBAN

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Funciones de Javascript útiles para extraer y validar información general de números de cuenta IBAN de Costa Rica.

Este repositorio fue creado usando [Neutrino](https://neutrinojs.org/).

## Herramienta en línea

Para validar números de cuenta IBAN y extraer información sobre las entidad bancaria emisora, puede hacerse uso de la siguiente página oficialmente mantenida por los colaboradores de este repositorio:

[https://costaricaiban.org](https://costaricaiban.org)

## Uso con Node.js

Instalación yarn:

```
$ yarn add costa-rica-iban
```

Instalación npm:

```
$ npm install costa-rica-iban
```

Uso de funciones:

```js
import {
  getBankNameFromIBAN,
  getBankObjectFromIBAN,
} from 'costa-rica-iban';


// Cuenta de banco sin representante:
let bankAcct = 'CR06010200009123456789';

console.log(getBankNameFromIBAN(bankAcct));
// > BAC San José S.A.


// Cuenta de banco con representante:
bankAcct = 'CR06083700009123456789';

console.log(getBankNameFromIBAN(bankAcct));
// > Credomatic

console.log(getBankNameFromIBAN(bankAcct), true);
// > BAC San José S.A.


console.log(getBankObjectFromIBAN(bankAcct));
// >
// {
//   "code": "837",
//   "entity": "Credomatic",
//   "participation": "representada",
//   "representative": "BAC San José S.A."
// }

```

Funciones disponibles:

- `getCountryPrefixFromIBAN(iban)`
- `verifyIBANCountryPrefix(iban)`
- `verifyIBANLength(iban)`
- `verifyIBANFormat(iban)`
- `getBankCodeFromIBAN(iban)`
- `getBankObjectFromIBAN(iban)`
- `getBankNameFromIBAN(iban, returnRepresentative = false)`

Uso de clase:

```js
import CostaRicaIBAN from 'costa-rica-iban';

const cri = new CostaRicaIBAN('CR06010200009123456789');

console.log(cri.getBankObject());
// >
// {
//   "code": "102",
//   "entity": "BAC San José S.A.",
//   "participation": "asociada",
//   "representative": ""
// }
```

Funciones de clase disponibles:

- `.getCountryPrefix()`
- `.getBankCode()`
- `.getBankObject()`
- `.getBankName()`

Para más detalles ver las [pruebas](https://github.com/jeanlescure/costa-rica-iban/tree/master/test/criban_test.js) en `./test/criban_test.js`.

## Uso en el navegador

```html
<script src="/dist/costa-rica-iban.min.js"></script>
<script>
  var CostaRicaIBAN = window['costa-rica-iban'].default;

  var cri = new CostaRicaIBAN('CR06010200009123456789');

  document.write(cri.getBankObject());
</script>
```

## Desarrollo

Clonar repositorio e instalar dependencias:

```
$ yarn
```

Usamos [TDD](https://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas), por lo tanto se espera que se agreguen las pruebas pertinentes en `./test/criban_test.js`.

Nuestro motor de pruebas es [Jest](https://jestjs.io/). Para ejecutar las pruebas simplemente hace falta correr el comando:

```
$ yarn test
```

## Colaboración

Este repositorio tiene activados los issues y pull requests.

Para que un pull request sea tomado en cuenta deberá tener:

- un issue que describa la funcionalidad existente que esté rota o la funcionalidad nueva propuesta
- una descripción en el pull request que incluya mención del issue, un detalles de las soluciones/mejoras propuestas, y fuentes usadas para llegar a las soluciones/mejoras propuestas

## Colaboradores ✨

Gracias a los colaboradores de este proyecto ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://avatars2.githubusercontent.com/u/3330339?v=4" width="100px;" alt=""/><br /><sub><b>Jean Lescure</b></sub></a><br /><a href="https://github.com/jeanlescure/costa-rica-iban/commits?author=jeanlescure" title="Code">💻</a> <a href="#content-jeanlescure" title="Content">🖋</a> <a href="https://github.com/jeanlescure/costa-rica-iban/commits?author=jeanlescure" title="Documentation">📖</a> <a href="#design-jeanlescure" title="Design">🎨</a> <a href="#example-jeanlescure" title="Examples">💡</a> <a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/jeanlescure/costa-rica-iban/commits?author=jeanlescure" title="Tests">⚠️</a> <a href="#userTesting-jeanlescure" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/RoloGH"><img src="https://avatars2.githubusercontent.com/u/16967799?v=4" width="100px;" alt=""/><br /><sub><b>Rolando Gonzalez H.</b></sub></a><br /><a href="https://github.com/jeanlescure/costa-rica-iban/pulls?q=is%3Apr+reviewed-by%3ARoloGH" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://kevinwolf.dev"><img src="https://avatars2.githubusercontent.com/u/3157426?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Wolf</b></sub></a><br /><a href="#ideas-iamkevinwolf" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-iamkevinwolf" title="Project Management">📆</a></td>
    <td align="center"><a href="https://dianalu.design"><img src="https://avatars2.githubusercontent.com/u/1036995?v=4" width="100px;" alt=""/><br /><sub><b>Diana Lescure</b></sub></a><br /><a href="#userTesting-DiLescure" title="User Testing">📓</a> <a href="#a11y-DiLescure" title="Accessibility">️️️️♿️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Este proyecto sigue la especificación de [all-contributors](https://github.com/all-contributors/all-contributors). ¡Colaboraciones de cualquier tipo son bienvenidas!

## LICENCIA

Copyright 2020 Jean M. Lescure

Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
