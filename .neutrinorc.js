const airbnbBase = require('@neutrinojs/airbnb-base');
const library = require('@neutrinojs/library');
const jest = require('@neutrinojs/jest');

const libName = require('./package.json').name;

module.exports = {
  use: [
    airbnbBase(),
    library({
      name: libName,
      babel: {
        plugins: [
          '@babel/plugin-proposal-class-properties',
        ],
      },
    }),
    jest(),
    (neutrino) => {
      neutrino.config.output
        .filename(`${libName}.min.js`);
    },
  ],
};
