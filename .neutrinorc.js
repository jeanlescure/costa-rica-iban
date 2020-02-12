const airbnbBase = require('@neutrinojs/airbnb-base');
const library = require('@neutrinojs/library');
const jest = require('@neutrinojs/jest');

module.exports = {
  use: [
    airbnbBase(),
    library({
      name: 'costa-rica-iban',
      target: 'node',
      babel: {
        plugins: [
          '@babel/plugin-proposal-class-properties',
        ],
      },
    }),
    jest(),
  ],
};
