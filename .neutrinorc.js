const airbnbBase = require('@neutrinojs/airbnb-base');
const library = require('@neutrinojs/library');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnbBase(),
    library({
      name: 'costa-rica-iban'
    }),
    jest(),
    (neutrino) => {
      neutrino.config.module
        .rule('compile')
          .use('babel')
            .loader('babel-loader')
            .options({
              plugins: [
                ['@babel/plugin-proposal-class-properties']
              ]
            });
    }
  ],
};
